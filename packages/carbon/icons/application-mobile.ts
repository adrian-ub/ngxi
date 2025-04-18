import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonApplicationMobileIcon],svg[carbon-application-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4z"></svg:path><svg:circle cx="14.5" cy="24.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 30H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13v2H8v24h13v-8h2v8a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonApplicationMobileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
