import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFoxIcon],svg[arcticons-fox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.738 19.5l5.849 9m0-9l-5.849 9M12.412 24h2.926m-2.926 4.5v-9h4.501m6.356 9c-1.688 0-2.925-1.35-2.925-2.925v-3.037c0-1.688 1.35-3.038 2.925-3.038h0a3.025 3.025 0 0 1 3.037 3.037v2.925A3.025 3.025 0 0 1 23.27 28.5"></svg:path>`,
})
export class ArcticonsFoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
