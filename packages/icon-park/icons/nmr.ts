import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkNmrIcon],svg[icon-park-nmr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke-linecap="round" d="M32.4852 15.5147C30.3136 13.3431 27.3136 12 23.9999 12C20.6862 12 17.6862 13.3431 15.5146 15.5147"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M34 24H14V32H34V24Z"></svg:path><svg:path stroke-linecap="round" d="M17.0454 32L17 42.7147"></svg:path><svg:path stroke-linecap="round" d="M31.0455 32L31 42.7147"></svg:path></svg:g>`,
})
export class IconParkNmrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
