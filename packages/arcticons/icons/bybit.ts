import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBybitIcon],svg[arcticons-bybit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.096 17.056v9.258m2.271-6.943H40.5m-3.067 9.258v-9.258m-16.143 0L18.224 24l-3.067-4.629m3.067 9.258V24m-6.905 0a2.315 2.315 0 1 1 0 4.629H7.5v-9.258h3.819a2.315 2.315 0 1 1 0 4.629m0 0H7.5m19.88 0a2.315 2.315 0 1 1 0 4.629h-3.819v-9.258h3.819a2.315 2.315 0 1 1 0 4.629m0 0h-3.819"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBybitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
