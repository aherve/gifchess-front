import { Injectable } from '@angular/core';

export interface AnalyticsEvent {
  eventCategory: string
  eventAction: string
  eventLabel?: string
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  public trackEvent(evt: AnalyticsEvent) {
    if ('gtag' in window && typeof window['gtag'] === 'function') {
      const gtag = window['gtag'] as Function
      gtag('event', evt.eventAction, {
        send_to: 'UA-28822787-3',
        event_category: evt.eventCategory,
        event_label: evt.eventLabel,
      })
    }
  }
}
