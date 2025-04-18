import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCookIcon],svg[icon-park-cook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M42 36V20H14V36C14 39.3137 16.6863 42 20 42H36C39.3137 42 42 39.3137 42 36Z"></svg:path><svg:path d="M4 20L44 20"></svg:path><svg:path d="M18 8V12"></svg:path><svg:path d="M28 6V12"></svg:path><svg:path d="M38 8V12"></svg:path></svg:g>`,
})
export class IconParkCookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
