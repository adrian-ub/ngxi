import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSubscriptionsIcon],svg[pixelarticons-subscriptions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 2H6v2h12zM4 6h16v2H4zm-2 4h20v12H2zm18 10v-8H4v8z"></svg:path>`,
})
export class PixelarticonsSubscriptionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
