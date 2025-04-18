import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCrosshairDetailedFillIcon],svg[si-crosshair-detailed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a1 1 0 1 0-2 0v1h2zm-3 10a2 2 0 1 1 4 0a2 2 0 0 1-4 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13 3.055V5a1 1 0 1 1-2 0V3.055A9.004 9.004 0 0 0 3.055 11H5a1 1 0 1 1 0 2H3.055A9.004 9.004 0 0 0 11 20.945V19a1 1 0 1 1 2 0v1.945A9.004 9.004 0 0 0 20.945 13H19a1 1 0 1 1 0-2h1.945A9.004 9.004 0 0 0 13 3.055M12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M21 11v2h1a1 1 0 1 0 0-2zm-8 10h-2v1a1 1 0 1 0 2 0zM3 13v-2H2a1 1 0 1 0 0 2z"></svg:path>`,
})
export class SiCrosshairDetailedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
