export type ScheduleStatus = "active" | "draft" | "historical";

export interface ScheduleEntry {
  locationId: string;
  groupId: string;
  day: string;
  startsAt: string;
  endsAt?: string;
  validFrom?: string;
  validTo?: string;
  status: ScheduleStatus;
}

export const futureSchedule: ScheduleEntry[] = [];
