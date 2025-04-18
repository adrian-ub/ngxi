import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiBackOutlinedIcon],svg[weui-back-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5L10 4.563L2.682 12z"></svg:path>`,
})
export class WeuiBackOutlinedIcon {
  readonly viewBox = input("0 0 12 24")
  readonly width = input("0.5em")
  readonly height = input("1em")
}
