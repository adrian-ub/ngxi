import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineProjectorOneIcon],svg[icon-park-outline-projector-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 21V10H10v11"></svg:path><svg:rect width="40" height="16" x="4" y="21" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:rect width="4" height="4" x="14" y="27" fill="currentColor" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 29h8"></svg:path></svg:g>`,
})
export class IconParkOutlineProjectorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
