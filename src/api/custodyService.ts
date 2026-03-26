import { apiClient } from "../lib/api-client";

export interface CustodyTimelineEvent {
  type: string;
  label: string;
  timestamp: string;
  stellarExplorerUrl?: string;
}

export const custodyService = {
  async getTimeline(custodyId: string): Promise<CustodyTimelineEvent[]> {
    return apiClient.get<CustodyTimelineEvent[]>(
      `/custody/${custodyId}/timeline`,
    );
  },
};
