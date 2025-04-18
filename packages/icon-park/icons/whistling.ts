import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWhistlingIcon],svg[icon-park-whistling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M27 11L4 11V19H15C14.35 20.55 14 22.21 14 24C14 31.21 19.79 37 27 37C34.2 37 40 31.21 40 24C40 16.79 34.21 11 27 11Z"></svg:path><svg:path d="M27 11V17"></svg:path><svg:path d="M40 24H44"></svg:path></svg:g>`,
})
export class IconParkWhistlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
