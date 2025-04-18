import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShortSkirtIcon],svg[icon-park-short-skirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 9L17 4H31L36 9L43 35C43 35 39.9997 44 24 44C8.00031 44 5 35 5 35L12 9Z"></svg:path><svg:path stroke="#fff" d="M13 42L17 26"></svg:path><svg:path stroke="#000" d="M5 35C5 35 8.00031 44 24 44"></svg:path></svg:g>`,
})
export class IconParkShortSkirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
