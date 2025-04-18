import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSignalOneIcon],svg[icon-park-outline-signal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M38.142 38.142A19.94 19.94 0 0 0 44 24a19.94 19.94 0 0 0-5.858-14.142m-28.284 0A19.94 19.94 0 0 0 4 24a19.94 19.94 0 0 0 5.858 14.142M15.1 14.1A13.96 13.96 0 0 0 11 24a13.96 13.96 0 0 0 4.1 9.9m17.8 0A13.96 13.96 0 0 0 37 24a13.96 13.96 0 0 0-4.1-9.9"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44V34m0-30v10"></svg:path><svg:path fill="currentColor" d="M24 27a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconParkOutlineSignalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
