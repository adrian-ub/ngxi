import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDiapersOneIcon],svg[icon-park-outline-diapers-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 6H6v18c0 4.5 2.5 18.5 18 18.5S42 28 42 24zM6 14h10m16 0h10"></svg:path><svg:path d="M42 24c-10 0-17 4.8-17 18M6 24c10 0 17 4.8 17 18"></svg:path></svg:g>`,
})
export class IconParkOutlineDiapersOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
