import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonUserIdentificationIcon],svg[carbon-user-identification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h4a1 1 0 0 1 1 1v2h-6v-2a1 1 0 0 1 1-1"></svg:path><svg:circle cx="24" cy="8" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 18H18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2M18 4v12h12.001L30 4zm-3 26h-2v-4a2.947 2.947 0 0 0-3-3H6a2.947 2.947 0 0 0-3 3v4H1v-4a4.95 4.95 0 0 1 5-5h4a4.95 4.95 0 0 1 5 5zM8 11a3 3 0 0 1 0 6a3 3 0 0 1 0-6m0-2a5 5 0 0 0 0 10A5 5 0 0 0 8 9"></svg:path>`,
})
export class CarbonUserIdentificationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
