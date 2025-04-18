import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteFiveIcon],svg[icon-park-delete-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M8 11L40 11"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 5L30 5"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 25L28 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 25L20 33"></svg:path></svg:g>`,
})
export class IconParkDeleteFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
