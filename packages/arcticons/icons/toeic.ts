import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsToeicIcon],svg[arcticons-toeic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.86 22.675a2 2 0 0 1 2 2v1.3a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2"></svg:path><svg:circle cx="32.449" cy="20.225" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.499 22.675v5.3m-16.264-6.95v5.95a1 1 0 0 0 1 1h.3m-2.35-5.3h2.1m21.284 4.293a2 2 0 0 1-3.737-.993v-1.3a2 2 0 0 1 3.735-.996m-8.645 3.287a2 2 0 0 1-3.738-.99v-1.3a2 2 0 1 1 4 0v.65h-4M11.261 19.87v1.83h-1.83m1.83 0l-1.294-1.294m2.588 0l-2.588 2.588m1.294.206v.33m1.061-.769l.234.233m.535-1.294h-.33"></svg:path>`,
})
export class ArcticonsToeicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
