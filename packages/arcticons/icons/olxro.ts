import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOlxroIcon],svg[arcticons-olxro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.087 24a8.815 8.815 0 0 1-8.793 8.837h0A8.815 8.815 0 0 1 4.5 24h0a8.815 8.815 0 0 1 8.793-8.837h0A8.815 8.815 0 0 1 22.087 24Zm-6.305 0a2.489 2.489 0 1 1-2.489-2.501A2.495 2.495 0 0 1 15.783 24Z"></svg:path><svg:rect width="5.643" height="21.457" x="24.612" y="13.272" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".545"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.78 18.612v3.582l1.798 1.805l-1.798 1.807v3.582h3.564l1.796-1.807l1.798 1.807H43.5v-3.582l-1.796-1.807l1.796-1.805v-3.582h-3.562l-1.798 1.807l-1.796-1.807Z"></svg:path>`,
})
export class ArcticonsOlxroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
