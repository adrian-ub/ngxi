import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoproQuikIcon],svg[arcticons-gopro-quik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.244 22.346v5.077c0 1.7 1.378 3.077 3.077 3.077h0c1.7 0 3.077-1.378 3.077-3.077v-5.077m0 5.077V30.5m6.365-12.308V30.5m.001-2.614l5.571-5.544m-3.797 3.779l4.379 4.361"></svg:path><svg:circle cx="29.471" cy="18.577" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.471 22.346V30.5m-12.234 0l-4.077-4.028"></svg:path><svg:rect width="8.154" height="12.308" x="9.083" y="18.192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4.077" ry="4.077"></svg:rect>`,
})
export class ArcticonsGoproQuikIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
