import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonOperationGaugeIcon],svg[carbon-operation-gauge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M30 4h-6v2h3.75L24 10v2h6v-2h-3.62L30 6V4z" fill="currentColor"></svg:path><svg:path d="M20 17.62L22.08 14l-1.73-1l-2.18 3.76A12 12 0 0 0 2 28h2a10 10 0 0 1 13.16-9.48L14 24a2 2 0 1 0 2 2a2 2 0 0 0-.27-1L19 19.35A10 10 0 0 1 24 28h2a12 12 0 0 0-6-10.38z" fill="currentColor"></svg:path>`,
})
export class CarbonOperationGaugeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
