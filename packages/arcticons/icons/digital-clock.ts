import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDigitalClockIcon],svg[arcticons-digital-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.5 5.5h29c2.216 0 4 1.784 4 4v29c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4v-29c0-2.216 1.784-4 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.732 22.607c0-1.6 1.5-2.9 3.2-2.6c1.1.2 2 1.2 2.1 2.3c0 .8-.2 1.7-.8 2.2c-1.1.9-4.5 3.5-4.5 3.5h5.3m17.366-6.987l-3.945 6.016m2 .9c-1.5 0-2.7-1.2-2.7-2.6v-2.7c0-1.5 1.2-2.6 2.6-2.6h0c1.5 0 2.6 1.2 2.6 2.6v2.7c.2 1.5-1 2.6-2.5 2.6m9.239-6.916l-3.945 6.016m2 .9c-1.5 0-2.7-1.2-2.7-2.6v-2.7c0-1.5 1.2-2.6 2.6-2.6h0c1.5 0 2.6 1.2 2.6 2.6v2.7c.2 1.5-1 2.6-2.5 2.6"></svg:path><svg:g fill="currentColor" stroke-width="0"><svg:path d="M24.57 26.7a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path><svg:circle cx="23.82" cy="21.3" r=".75"></svg:circle></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.105 27.336c.6.5 1.1.7 2.5.7h.3c1.1 0 2-.9 2-2h0c0-1.1-.9-2-2-2m-2.8-3.316c.6-.5 1.2-.7 2.5-.7h.3c1.1 0 2 .9 2 2h0c0 1.1-.9 2-2 2m-1.5.016h1.5"></svg:path>`,
})
export class ArcticonsDigitalClockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
