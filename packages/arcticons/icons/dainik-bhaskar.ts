import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDainikBhaskarIcon],svg[arcticons-dainik-bhaskar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 3.5v7.124m0 26.752V44.5M5.421 15.336l6.456 3.011m24.246 11.306l6.456 3.011m0-17.328l-6.456 3.011M11.877 29.653l-6.456 3.011"></svg:path>`,
})
export class ArcticonsDainikBhaskarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
