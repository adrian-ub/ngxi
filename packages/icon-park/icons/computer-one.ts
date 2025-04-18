import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkComputerOneIcon],svg[icon-park-computer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42L10 6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 12L31 12"></svg:path><svg:circle cx="17" cy="21" r="2" fill="#000"></svg:circle><svg:circle cx="17" cy="27" r="2" fill="#000"></svg:circle><svg:circle cx="17" cy="33" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="21" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="27" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="33" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="21" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="27" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="33" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkComputerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
