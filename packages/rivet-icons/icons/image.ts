import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsImageIcon],svg[rivet-icons-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M15 1H1v14h14zM3 6.92V3h10v7.132l-1.928-1.286l-1.914.957l-4.624-4.11L3 6.918Zm7.928 4.234L13 12.535V13H3V9.48l1.466-1.172l4.376 3.89z"></svg:path></svg:g>`,
})
export class RivetIconsImageIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
