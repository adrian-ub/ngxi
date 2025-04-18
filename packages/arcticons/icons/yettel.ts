import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYettelIcon],svg[arcticons-yettel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.453 4.276h6.449l10.918 19.71l10.888-19.71h6.51l-14.37 24.616v14.384H20.76V28.892ZM35.07 40.59a2.74 2.74 0 1 1-2.74-2.74a2.74 2.74 0 0 1 2.74 2.74"></svg:path>`,
})
export class ArcticonsYettelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
