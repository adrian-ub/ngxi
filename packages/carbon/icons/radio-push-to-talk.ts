import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRadioPushToTalkIcon],svg[carbon-radio-push-to-talk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h6v2h-6zm0 4h6v2h-6z"></svg:path><svg:circle cx="16" cy="23" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 7h-1V2h-2v5h-9a2 2 0 0 0-2 2v2H6v2h2v2H6v2h2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M10 28V9h12v19Z"></svg:path>`,
})
export class CarbonRadioPushToTalkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
