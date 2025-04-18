import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBroccoliIcon],svg[hugeicons-broccoli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.052 8.462C1.877 10.47 3.258 14 6.516 14c1.63 0 3.008-.981 3.45-2.327m-4.029-1.365C2.323 8.89 4.247 4.36 7.952 4.798C7.952 3.27 9.305 2 10.974 2s3.022 1.022 3.022 2.551a3.17 3.17 0 0 1 2.015-.705c1.669 0 3.021 1.24 3.021 2.77c0 1.529-1.352 2.769-3.021 2.769m2.85-1.847C22.35 8.808 21.335 14 17.52 14c-1.947 0-3.525-1.496-3.525-3.341c-1.007 1.495-2.518 1.956-4.03 1.033M7 14c.886.441 2.413 2.537 2.5 7c.013.66 1.784 1 2.5 1s2.487-.34 2.5-1c.087-4.463 1.614-6.558 2.5-7" color="currentColor"></svg:path>`,
})
export class HugeiconsBroccoliIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
