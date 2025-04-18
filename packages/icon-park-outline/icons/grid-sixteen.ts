import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGridSixteenIcon],svg[icon-park-outline-grid-sixteen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M14 4v40M24 4v40M34 4v40"></svg:path><svg:path stroke-linejoin="round" d="M4 14h40M4 34h40M4 24h40"></svg:path></svg:g>`,
})
export class IconParkOutlineGridSixteenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
