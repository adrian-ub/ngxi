import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEmailDownIcon],svg[icon-park-outline-email-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 15h8v26H4V15h8m12 4V5"></svg:path><svg:path d="m30 13l-6 6l-6-6"></svg:path><svg:path d="m4 15l20 15l20-15"></svg:path></svg:g>`,
})
export class IconParkOutlineEmailDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
