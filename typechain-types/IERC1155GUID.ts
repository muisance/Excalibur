/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IERC1155GUIDInterface extends utils.Interface {
  contractName: "IERC1155GUID";
  functions: {
    "GUIDHas(address,bytes32)": FunctionFragment;
    "GUIDURI(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "GUIDHas",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "GUIDURI", values: [BytesLike]): string;

  decodeFunctionResult(functionFragment: "GUIDHas", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "GUIDURI", data: BytesLike): Result;

  events: {
    "GUIDCreated(uint256,bytes32)": EventFragment;
    "GUIDURIChange(string,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GUIDCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GUIDURIChange"): EventFragment;
}

export type GUIDCreatedEvent = TypedEvent<
  [BigNumber, string],
  { id: BigNumber; guid: string }
>;

export type GUIDCreatedEventFilter = TypedEventFilter<GUIDCreatedEvent>;

export type GUIDURIChangeEvent = TypedEvent<
  [string, string],
  { value: string; guid: string }
>;

export type GUIDURIChangeEventFilter = TypedEventFilter<GUIDURIChangeEvent>;

export interface IERC1155GUID extends BaseContract {
  contractName: "IERC1155GUID";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IERC1155GUIDInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    GUIDHas(
      account: string,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    GUIDURI(guid: BytesLike, overrides?: CallOverrides): Promise<[string]>;
  };

  GUIDHas(
    account: string,
    guid: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  GUIDURI(guid: BytesLike, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    GUIDHas(
      account: string,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    GUIDURI(guid: BytesLike, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "GUIDCreated(uint256,bytes32)"(
      id?: BigNumberish | null,
      guid?: null
    ): GUIDCreatedEventFilter;
    GUIDCreated(id?: BigNumberish | null, guid?: null): GUIDCreatedEventFilter;

    "GUIDURIChange(string,bytes32)"(
      value?: null,
      guid?: BytesLike | null
    ): GUIDURIChangeEventFilter;
    GUIDURIChange(
      value?: null,
      guid?: BytesLike | null
    ): GUIDURIChangeEventFilter;
  };

  estimateGas: {
    GUIDHas(
      account: string,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GUIDURI(guid: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    GUIDHas(
      account: string,
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GUIDURI(
      guid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
