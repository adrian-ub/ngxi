import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFinancialTimesIcon],svg[arcticons-financial-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.624 31.346V16.653M13.6 24h4.686M13.6 31.346V16.653h7.21v1.172m-2.524 5.003v2.343m-3.515 6.175h-2.343m18.368 0h-2.343m5.948-13.521v-1.172h-9.553v1.172m-12.42-1.172H13.6"></svg:path>`,
})
export class ArcticonsFinancialTimesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
