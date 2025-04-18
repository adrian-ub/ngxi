import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLottolandIcon],svg[arcticons-lottoland-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.011 8.604v20.96a2.994 2.994 0 0 0 2.995 2.995h8.983M5.5 36.664c5.45 1.735 11.763 2.732 18.5 2.732s13.05-.997 18.5-2.732"></svg:path>`,
})
export class ArcticonsLottolandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
