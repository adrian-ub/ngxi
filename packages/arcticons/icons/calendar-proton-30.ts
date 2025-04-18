import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalendarProton30Icon],svg[arcticons-calendar-proton-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.007 28.91a4.98 4.98 0 0 0 5 5a4.825 4.825 0 0 0 4.815-5v-5a4.943 4.943 0 0 0-4.815-5a5.1 5.1 0 0 0-5 5Zm-6.011-2.593A3.715 3.715 0 0 1 18.7 30.02h0a3.715 3.715 0 0 1-3.704 3.703h-1.482c-2.592 0-3.518-.37-4.63-1.296m.001-12.221c1.11-.926 2.222-1.296 4.63-1.296h1.481a3.715 3.715 0 0 1 3.704 3.703h0a3.715 3.715 0 0 1-3.704 3.704h-3.704"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 25.793v-13.93a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v24.275a4 4 0 0 0 4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 36.138V11.862a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4v24.276a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.207 40.138V15.819a3.14 3.14 0 0 0-3.138-3.138H4.5"></svg:path>`,
})
export class ArcticonsCalendarProton30Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
