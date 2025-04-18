import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsMoneyIcon],svg[pixelarticons-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H2v12h4v4h16V8h-4V4zm0 2v2H6v6H4V6zm-8 4h12v8H8zm8 2h-4v4h4z"></svg:path>`,
})
export class PixelarticonsMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
