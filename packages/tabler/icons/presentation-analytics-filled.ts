import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPresentationAnalyticsFilledIcon],svg[tabler-presentation-analytics-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 0 2v9a3 3 0 0 1-3 3h-5v2h2a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2h2v-2H6a3 3 0 0 1-3-3V5a1 1 0 1 1 0-2zM9 7a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1m6 2a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m-3 1a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerPresentationAnalyticsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
