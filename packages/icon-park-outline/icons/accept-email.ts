import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAcceptEmailIcon],svg[icon-park-outline-accept-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H4v30h20m20-5H30"></svg:path><svg:path d="m35 29l-5 5l5 5M4 9l20 15L44 9"></svg:path></svg:g>`,
})
export class IconParkOutlineAcceptEmailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
