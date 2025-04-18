import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSwimsuitIcon],svg[icon-park-swimsuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 4V11"></svg:path><svg:path d="M34 4V11"></svg:path><svg:path d="M12 31H36V36C33 36 26 39 26 44H21C21 39 15 36 12 36V31Z"></svg:path><svg:circle cx="14" cy="18" r="7" fill="#2F88FF"></svg:circle><svg:circle cx="34" cy="18" r="7" fill="#2F88FF"></svg:circle><svg:path d="M21 18H27"></svg:path></svg:g>`,
})
export class IconParkSwimsuitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
