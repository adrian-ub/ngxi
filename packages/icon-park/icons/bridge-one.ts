import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBridgeOneIcon],svg[icon-park-bridge-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 19V33H12C12 26.3726 17.3726 21 24 21C30.6274 21 36 26.3726 36 33H44V19C44 19 31.9652 15 24 15C16.0348 15 4 19 4 19Z"></svg:path>`,
})
export class IconParkBridgeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
