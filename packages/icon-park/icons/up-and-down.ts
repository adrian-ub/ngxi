import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUpAndDownIcon],svg[icon-park-up-and-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 36V44H44V12H36V20H28V28H20V36H12Z"></svg:path><svg:path d="M18 13L27 4"></svg:path><svg:path d="M21 4H27V10"></svg:path><svg:path d="M10 27H4V21"></svg:path><svg:path d="M13 18L4 27"></svg:path></svg:g>`,
})
export class IconParkUpAndDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
