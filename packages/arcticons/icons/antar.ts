import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAntarIcon],svg[arcticons-antar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m42.011 43.5l-6.037-2.959h-12.15c-6.293-.07-12.368-3.443-15.612-9.355c-4.786-8.725-1.593-19.678 7.132-24.465a18 18 0 0 1 8.65-2.221h0c9.962.01 18.027 8.094 18.018 18.056zm-6.037-9.025V17.794"></svg:path>`,
})
export class ArcticonsAntarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
