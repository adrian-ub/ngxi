import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHardDiskIcon],svg[icon-park-hard-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M44 29H4V42H44V29Z"></svg:path><svg:path fill="#fff" d="M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"></svg:path></svg:g>`,
})
export class IconParkHardDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
