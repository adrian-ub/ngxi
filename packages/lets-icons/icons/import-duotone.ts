import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsImportDuotoneIcon],svg[lets-icons-import-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="14" height="6" x="5" y="13" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" d="M9.5 13.5L12 16m0 0l2.5-2.5M12 16V6"></svg:path></svg:g>`,
})
export class LetsIconsImportDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
