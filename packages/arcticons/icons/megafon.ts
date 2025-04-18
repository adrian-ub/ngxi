import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMegafonIcon],svg[arcticons-megafon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19 20.23a2.69 2.69 0 1 1 2.68-2.69A2.69 2.69 0 0 1 19 20.23M24 2.5A21.5 21.5 0 0 0 19.43 45V25.72h0A1.76 1.76 0 0 1 21.12 24h2.95V2.5m14.06 32.22A1.68 1.68 0 1 1 39.81 33a1.68 1.68 0 0 1-1.68 1.68m-5.61 0A1.68 1.68 0 1 1 34.19 33a1.68 1.68 0 0 1-1.67 1.68m-5.62 0A1.68 1.68 0 1 1 28.58 33a1.68 1.68 0 0 1-1.68 1.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.43 45A21.5 21.5 0 1 0 24 2.5"></svg:path>`,
})
export class ArcticonsMegafonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
