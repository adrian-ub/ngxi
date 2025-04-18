import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineListNumbersIcon],svg[icon-park-outline-list-numbers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 9h22M20 19h22M20 29h22M20 39h22M6 29h6v3l-6 6v1h6M7 11l2-2v10m0 0H7m2 0h2"></svg:path>`,
})
export class IconParkOutlineListNumbersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
