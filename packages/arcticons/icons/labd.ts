import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLabdIcon],svg[arcticons-labd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.95 8.557l2.46-2.284m-24.819 0l2.46 2.284m24.131 12.685v8.076a14.182 14.182 0 0 1-28.364 0v-8.076m0-2.555v-.005A14.15 14.15 0 0 1 24 4.5h0a14.15 14.15 0 0 1 14.182 14.182v.005m.001 2.555H9.817m0-2.555h28.366"></svg:path><svg:circle cx="29.486" cy="13.041" r=".75" fill="currentColor"></svg:circle><svg:circle cx="18.514" cy="13.041" r=".75" fill="currentColor"></svg:circle>`,
})
export class ArcticonsLabdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
