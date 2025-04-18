import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDropShadowUpIcon],svg[icon-park-outline-drop-shadow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M24 43a15.95 15.95 0 0 0 11.314-4.686A15.95 15.95 0 0 0 40 27a15.95 15.95 0 0 0-4.686-11.314A15.95 15.95 0 0 0 24 11a15.95 15.95 0 0 0-11.314 4.686A15.95 15.95 0 0 0 8 27a15.95 15.95 0 0 0 4.686 11.314A15.95 15.95 0 0 0 24 43Z" clip-rule="evenodd"></svg:path><svg:path d="M39.557 11.444A21.93 21.93 0 0 0 24 5a21.93 21.93 0 0 0-15.556 6.444"></svg:path></svg:g>`,
})
export class IconParkOutlineDropShadowUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
