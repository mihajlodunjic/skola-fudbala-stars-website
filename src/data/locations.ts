export type LocationStatus = "active" | "draft" | "historical";

export interface TrainingLocation {
  id: string;
  status: LocationStatus;
  venueName?: string;
  area?: string;
  address?: string;
  mapUrl?: string;
  groups?: string[];
  days?: string[];
  times?: string[];
  lastConfirmedAt?: string;
  internalNote?: string;
}

export const trainingLocations: TrainingLocation[] = [];

export const activeTrainingLocations = trainingLocations.filter(
  (location) =>
    location.status === "active" &&
    location.venueName &&
    location.area &&
    location.address &&
    location.mapUrl,
);
