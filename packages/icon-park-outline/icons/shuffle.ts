import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineShuffleIcon],svg[icon-park-outline-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 42h12V30m0-12V6H30m12 0L6 42m25.5-10.5L34 34l5 5l2.5 2.5l.5.5M24 24L6 6z"></svg:path>`,
})
export class IconParkOutlineShuffleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
