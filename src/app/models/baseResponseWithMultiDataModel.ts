import { GetHomeRequestModel } from "./getHomeRequestModel";

export interface BaseResponseWithMultiDataModel<T> extends GetHomeRequestModel {
    data: T[];
}