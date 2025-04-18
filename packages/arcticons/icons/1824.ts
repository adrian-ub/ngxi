import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons1824Icon],svg[arcticons-1824-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 17.833L17.833 5.5L42.5 30.167L30.167 42.5z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.22 29.039l-6.03-6.029l.814 7.286L35 26.3m-10.751 6.646a2.827 2.827 0 0 1 .435-4.353c.998-.676 2.391-.62 3.323.145c.694.57 1.117 1.392 1.064 2.21c-.1 1.518-.79 6.03-.79 6.03l3.995-3.994M17.564 13.176l2.328.687l-6.03 6.029m6.547.517a2.132 2.132 0 1 0-3.015 3.015l.98.98a2.132 2.132 0 1 0 3.015-3.015"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.389 21.389a2.132 2.132 0 1 0 3.015-3.015l-.98-.98a2.132 2.132 0 1 0-3.015 3.015m0 0l.98.98"></svg:path>`,
})
export class Arcticons1824Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
