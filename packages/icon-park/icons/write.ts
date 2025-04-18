import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkWriteIcon],svg[icon-park-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M5.32497 43.4996L13.81 43.4998L44.9227 12.3871L36.4374 3.90186L5.32471 35.0146L5.32497 43.4996Z"></svg:path><svg:path stroke-linecap="round" d="M27.9521 12.3872L36.4374 20.8725"></svg:path></svg:g>`,
})
export class IconParkWriteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
