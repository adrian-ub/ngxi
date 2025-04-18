import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePlayCycleIcon],svg[icon-park-outline-play-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 25c0-6.65 5.396-12 12-12h28"></svg:path><svg:path d="m38 7l6 6l-6 6m6 4c0 6.65-5.396 12-12 12H4"></svg:path><svg:path d="m10 41l-6-6l6-6"></svg:path></svg:g>`,
})
export class IconParkOutlinePlayCycleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
