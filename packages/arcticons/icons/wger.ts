import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWgerIcon],svg[arcticons-wger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.962 24h14.076m-16.307 8.385v-16.77m-3.962 15.47v-14.17m-3.961 12.87v-11.57M3.5 24h1.038m28.731-8.385v16.77m3.962-15.47v14.17m3.961-12.87v11.57M44.5 24h-1.038"></svg:path>`,
})
export class ArcticonsWgerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
