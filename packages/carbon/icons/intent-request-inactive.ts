import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIntentRequestInactiveIcon],svg[carbon-intent-request-inactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18.5" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="23.5" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="28.5" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15.4 30L5 23.8c-.6-.4-1-1-1-1.7V9.9c0-.7.4-1.4 1-1.7l10-5.9c.3-.2.6-.3 1-.3s.7.1 1 .3l10 5.9c.6.4 1 1 1 1.7V16h-2V9.9L16 4L6 9.9v12.2l10.5 6.2z"></svg:path>`,
})
export class CarbonIntentRequestInactiveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
