import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGridNineIcon],svg[icon-park-outline-grid-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M5 18h38M5 30h38M17 5v38M30 5v38"></svg:path></svg:g>`,
})
export class IconParkOutlineGridNineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
