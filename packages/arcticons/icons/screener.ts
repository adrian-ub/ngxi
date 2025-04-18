import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsScreenerIcon],svg[arcticons-screener-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.511 24.493v11.173h11.137M35.677 16.6V5.5H24.541m-7.893 0H5.51v11.1m36.979 19.066h-6.812V42.5m-6.811-6.834h6.811V28.83"></svg:path>`,
})
export class ArcticonsScreenerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
