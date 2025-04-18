import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTurborepoLightIcon],svg[material-icon-theme-turborepo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="materialIconThemeTurborepoLight0" x1="27.349" x2="7.613" y1="26.455" y2="6.719" gradientTransform="matrix(1 0 0 -1 0 34)" gradientUnits="userSpaceOnUse"><svg:stop offset=".15" stop-color="#2196f3"></svg:stop><svg:stop offset=".85" stop-color="#f50057"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="#455a64" d="M16 8a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"></svg:path><svg:path fill="url(#materialIconThemeTurborepoLight0)" d="M4.281 23.647A13.9 13.9 0 0 1 2 16h4a9.95 9.95 0 0 0 1.192 4.736ZM14 29.84v-4.042a9.9 9.9 0 0 1-3.892-1.732l-2.854 2.855A13.9 13.9 0 0 0 14 29.84M16 2v4a10 10 0 0 1 2 19.8v4.04A13.992 13.992 0 0 0 16 2"></svg:path>`,
})
export class MaterialIconThemeTurborepoLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
