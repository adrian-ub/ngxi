import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBaokemengIcon],svg[icon-park-outline-baokemeng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M44 24H30c0-3.31-2.69-6-6-6s-6 2.69-6 6H4C4 12.95 12.95 4 24 4s20 8.95 20 20Z"></svg:path><svg:path stroke-linecap="round" d="M18 24H4c0 11.05 8.95 20 20 20s20-8.95 20-20H30"></svg:path><svg:path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path></svg:g>`,
})
export class IconParkOutlineBaokemengIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
