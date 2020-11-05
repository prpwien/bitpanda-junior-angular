export interface BitpandaResponse {
  data: {
    attributes: {
      cryptocoins: CryptocoinsResponse[],
      commodities: CommoditiesResponse[],
      fiats: FiatsResponse[]
      indexes: IndexesResponse[],
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

export interface FiatsResponse {
  attributes: {
    name: string,
    symbol: string,
    logo_color: string
  };
}

export interface CommoditiesResponse {
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

export interface IndexesResponse {
  attributes: {
    symbol: string,
    name: string,
    color: string,
    logo: string,
    avg_price: number
  };
}
