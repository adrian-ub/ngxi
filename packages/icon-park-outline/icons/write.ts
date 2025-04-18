import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineWriteIcon],svg[icon-park-outline-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M5.325 43.5h8.485l31.113-31.113l-8.486-8.485L5.325 35.015z"></svg:path><svg:path stroke-linecap="round" d="m27.952 12.387l8.485 8.485"></svg:path></svg:g>`,
})
export class IconParkOutlineWriteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
