export interface BitpandaResponse {
  data: {
    attributes: {
      cryptocoins: CryptocoinsResponse[],
      commodities: CommoditiesResponse[]
    }
  };
}


export interface CryptocoinsResponse {
  attributes: {
    symbol: string,
    name: string,
    color: string,
    logo: string,
    avg_price: number,
    circulating_supply: string,
    available: boolean
  };
}

export interface CommoditiesResponse {
  attributes: {
    name: string,
    color: string,
    logo: string,
    avg_price: number,
  };
}
