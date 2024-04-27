export interface Recorrido {
    id: number
}

export interface Waypoint {
    id: string;
    lat: number;
    lng: number;
    sequence: number;
    estimatedArrival: Date | null;
    estimatedDeparture: Date | null;
    fulfilledConstraints: any[]; // Define el tipo correcto para fulfilledConstraints
    cluster?: number; // El campo es opcional
  }
  
  export interface Interconnection {
    fromWaypoint: string;
    toWaypoint: string;
    distance: number;
    time: number;
    rest: number;
    waiting: number;
  }
  
  export interface TimeBreakdown {
    driving: number;
    service: number;
    rest: number;
    waiting: number;
  }
  
  export interface Route {
    waypoints: Waypoint[];
    distance: string;
    time: string;
    interconnections: Interconnection[];
    description: string;
    timeBreakdown: TimeBreakdown;
  }

  export interface OptimizarRequest {
    start: string;
    end: string;
    mode?: string;
    improveFor?: string;
    [key: string]: string; 
  }
