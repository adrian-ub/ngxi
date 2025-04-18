import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSlippersOneIcon],svg[icon-park-slippers-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 29H44V35H4V29Z"></svg:path><svg:path fill="#2F88FF" d="M7.00044 22C4 26 4 29 4 29H30.0007C30.0007 29 30.0003 23.5 30.0003 21C30.0003 18.5 28.5001 15.5 25.0001 15C21.5001 14.5 11.8762 15.5 7.00044 22Z"></svg:path></svg:g>`,
})
export class IconParkSlippersOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
