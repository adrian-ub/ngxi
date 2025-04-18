import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneGamepadIcon],svg[ic-twotone-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.67 11H4v2h2.67l1-1zM13 6.67V4h-2v2.67l1 1zm-2 10.66V20h2v-2.67l-1-1zM16.33 12l1 1H20v-2h-2.67z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M9 16.5V22h6v-5.5l-3-3zm4 3.5h-2v-2.67l1-1l1 1zm2-12.5V2H9v5.5l3 3zM11 4h2v2.67l-1 1l-1-1zM7.5 9H2v6h5.5l3-3zm-.83 4H4v-2h2.67l1 1zm9.83-4l-3 3l3 3H22V9zm3.5 4h-2.67l-1-1l1-1H20z"></svg:path>`,
})
export class IcTwotoneGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
