import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faWindowMinimizeIcon],svg[fa-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1056v192q0 66-47 113t-113 47H160q-66 0-113-47T0 1248v-192q0-66 47-113t113-47h1472q66 0 113 47t47 113"></svg:path>`,
})
export class FaWindowMinimizeIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}
