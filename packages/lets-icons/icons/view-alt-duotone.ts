import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsViewAltDuotoneIcon],svg[lets-icons-view-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M12 4c5.254 0 7.488 3.45 8.404 5.819c.338.875.507 1.312.209 1.746c-.298.435-.825.435-1.879.435H5.266c-1.054 0-1.58 0-1.879-.434c-.298-.435-.129-.872.21-1.747C4.511 7.45 6.746 4 12 4"></svg:path><svg:circle cx="12" cy="11" r="4" fill="currentColor"></svg:circle>`,
})
export class LetsIconsViewAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
