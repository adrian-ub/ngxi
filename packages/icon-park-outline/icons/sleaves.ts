import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSleavesIcon],svg[icon-park-outline-sleaves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 43s-13 1-20-7S4 4 4 4s24-1 32 5s6 23 6 23"></svg:path><svg:path d="M44 44s-11.18-8.449-18-16s-10-15-10-15m10 15l1-13m-1 13l-10-1"></svg:path></svg:g>`,
})
export class IconParkOutlineSleavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
