import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFireTwoIcon],svg[icon-park-outline-fire-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 21c0 7.18-5.82 13-13 13s-13-5.82-13-13s5-10 7-17c8 3.5 8 14 8 14s2-6 8-7.5c.5 5.5 3 7.434 3 10.5M7 36l32 8M7 44l32-8"></svg:path>`,
})
export class IconParkOutlineFireTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
