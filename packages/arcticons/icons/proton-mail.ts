import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsProtonMailIcon],svg[arcticons-proton-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 9.266a.897.897 0 0 1 1.47-.69L21.421 21.41a4.035 4.035 0 0 0 5.156 0L42.03 8.577a.897.897 0 0 1 1.469.69v26.33a4.035 4.035 0 0 1-4.035 4.035H8.535A4.035 4.035 0 0 1 4.5 35.598Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.265 19.178l.002.002l-7.782 6.874a3.586 3.586 0 0 1-4.667.07L4.5 15.879m30.707-1.636v25.389"></svg:path>`,
})
export class ArcticonsProtonMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
