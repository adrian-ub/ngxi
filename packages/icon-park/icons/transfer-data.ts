import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTransferDataIcon],svg[icon-park-transfer-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 8L4 14L10 20"></svg:path><svg:path d="M38 28L44 34L38 40"></svg:path><svg:path d="M4 14H44"></svg:path><svg:path d="M4 34H44"></svg:path></svg:g>`,
})
export class IconParkTransferDataIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
