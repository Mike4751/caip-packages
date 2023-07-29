import * as caip from "caip";
import * as utils from "./utils";
import { Specs } from "./spec";
import { AssetName, AssetNameParams } from "./assetName";

export interface EIP155Params {
  namespace?: string | null;
  reference?: string | null;
  chainId?: string | caip.ChainIdParams | null;
  address?: string | null;
  assetName?: string | AssetNameParams | null;
  tokenId?: string | null;
}

export class EIP155 {
  public static parse(id: string): EIP155Params {
    let params: EIP155Params = {
      namespace: null,
      reference: null,
      chainId: null,
      address: null,
      assetName: null,
      tokenId: null,
    };

    if (new RegExp(Specs[4].regex).test(id) === true) {
      if (!utils.isValidId(id, Specs[4])) {
        throw new Error(`Invalid ${Specs[4].name} provided ${id}`);
      }
      params = utils.getParams<caip.AssetIdParams>(id, Specs[4]);
    } else if (new RegExp(Specs[3].regex).test(id) === true) {
      if (!utils.isValidId(id, Specs[3])) {
        throw new Error(`Invalid ${Specs[3].name} provided ${id}`);
      }
      params = utils.getParams<caip.AssetTypeParams>(id, Specs[3]);
    } else if (new RegExp(Specs[1].regex).test(id) === true) {
      if (!utils.isValidId(id, Specs[1])) {
        throw new Error(`Invalid ${Specs[1].name} provided ${id}`);
      }

      const { namespace, reference, address } = utils.getParams<
        caip.AccountIdSplitParams
      >(id, Specs[1]);
      params = {
        chainId: { namespace: namespace, reference: reference },
        address: address,
      };
    } else if (new RegExp(Specs[0].regex).test(id) === true) {
      if (!utils.isValidId(id, Specs[0])) {
        throw new Error(`Invalid ${Specs[0].name} provided ${id}`);
      }

      params = utils.getParams<caip.ChainIdParams>(id, Specs[0]);
    }
    return new EIP155(params).toJSON();
  }

  public static format(params: EIP155Params): string {
    if (params.hasOwnProperty("tokenId")) {
      return utils.joinParams(params as any, Specs[4]);
    } else if (params.hasOwnProperty("assetName")) {
      return utils.joinParams(params as any, Specs[3]);
    } else if (params.hasOwnProperty("address")) {
      const pars: caip.AccountIdParams = params as caip.AccountIdParams;
      const chain = new caip.ChainId(params.chainId as caip.ChainIdParams);
      const splitParams: caip.AccountIdSplitParams = {
        ...chain.toJSON(),
        address: pars.address,
      };
      return utils.joinParams(splitParams as any, Specs[1]);
    } else if (params.hasOwnProperty("namespace")) {
      return utils.joinParams(params as any, Specs[0]);
    }
    return "";
  }

  public namespace?: string | null;
  public reference?: string | null;
  public chainId?: caip.ChainId | null;
  public address?: string | null;
  public assetName?: AssetName | null;
  public tokenId?: string | null;

  constructor(params: EIP155Params | string) {
    if (typeof params === "string") {
      params = EIP155.parse(params);
    }

    this.namespace = params.namespace != null ? params.namespace : null;
    this.reference = params.reference != null ? params.reference : null;
    this.chainId =
      params.chainId != null
        ? new caip.ChainId(params.chainId as string | caip.ChainIdParams)
        : null;
    this.address = params.address != null ? params.address : null;

    this.assetName =
      params.assetName != null
        ? new AssetName(params.assetName as string | AssetNameParams)
        : null;
    this.tokenId = params.tokenId != null ? params.tokenId : null;
  }

  public toString(): string {
    return EIP155.format(this.toJSON());
  }

  public toJSON(): EIP155Params {
    const json: EIP155Params = {};

    // Only include properties that are not null or undefined
    if (this.namespace !== null && this.namespace !== undefined) {
      json.namespace = this.namespace;
    }
    if (this.reference !== null && this.reference !== undefined) {
      json.reference = this.reference;
    }
    if (this.chainId !== null && this.chainId !== undefined) {
      json.chainId = this.chainId.toJSON();
    }
    if (this.address !== null && this.address !== undefined) {
      json.address = this.address;
    }
    if (this.assetName !== null && this.assetName !== undefined) {
      json.assetName = this.assetName.toJSON();
    }
    if (this.tokenId !== null && this.tokenId !== undefined) {
      json.tokenId = this.tokenId;
    }

    return json;
  }
}
