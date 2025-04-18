import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsNaturalreaderIcon],svg[arcticons-naturalreader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 18v12m-4.5-18v12m9 0v12M6 42V6m4.5 36V6M15 42V6m18 36V6m9 36V6m-4.5 36V6"></svg:path>`,
})
export class ArcticonsNaturalreaderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
