import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFastlikeafoxIcon],svg[arcticons-fastlikeafox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.53 28.23l11.55-6l-12.22-1.1a20.3 20.3 0 0 1 .67 7.1m-11.34-.64a29.4 29.4 0 0 0 5.61 5.15l-9.06 7.68Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.12 21.71c-.3-.73-.41-.95-.91-2.25l7.29.87L40.39 22M18.78 32.88L14 35l-9.5-.11l7.66-5l5.28-1.09l1.8 2.3m4.54 3.36l1.85.06l-4.94 4.16l.11-1.68"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.63 34.52l10.63-7.36l.31-1.52m-24.41 4.25c-1.07 2.33.2 3.8 1.8 5.15m15.58-16.28l9.58-1.35l4.08-7.63l-9.89-.55l-2.81 3.49"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m33.31 9.23l-5.76-1.65l.93 5.19m1.06 5.99l-6.4-5.84l7.36-.2a9.94 9.94 0 0 0-.96 6.04M17.44 28.8L30.91 19m-1.37-.24a6.67 6.67 0 0 1 4.8 2.69m1.87-1.99L35.11 18"></svg:path>`,
})
export class ArcticonsFastlikeafoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
