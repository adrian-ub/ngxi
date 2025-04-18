import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotoIcon],svg[arcticons-moto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 36.23a45 45 0 0 0-3-5.7c-1.92-2.68-3.45-3.65-5.23-3.68C10.13 26.85 5.55 37 4.5 40.46h0L15.43 7.54z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 36.23l8.6-28.69l10.9 32.92h0c-1-3.44-5.63-13.61-11.31-13.61c-1.78 0-3.31 1-5.23 3.68a45 45 0 0 0-2.96 5.7"></svg:path>`,
})
export class ArcticonsMotoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
