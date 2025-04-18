import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmPlanningAnalyticsIcon],svg[carbon-ibm-planning-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.9 16.4l-6 12c-.2.3-.5.6-.9.6H10c-.6 0-1-.4-1-1s.4-1 1-1h12.4l5.5-11l-5.5-11H10c-.6 0-1-.4-1-1s.4-1 1-1h13q.6 0 .9.6l6 12q.15.45 0 .9zM10 22c0 .6.4 1 1 1h11v-2H11c-.6 0-1 .4-1 1m8-7H7c-.6 0-1 .4-1 1s.4 1 1 1h11zm4-4V9H11c-.6 0-1 .4-1 1s.4 1 1 1zM3 15c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m3 6c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-10c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class CarbonIbmPlanningAnalyticsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
