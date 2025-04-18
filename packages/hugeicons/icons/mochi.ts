import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMochiIcon],svg[hugeicons-mochi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19 21c1.751-.68 3-1.978 3-4.223C22 13.02 18.5 9 15 9s-7 4.019-7 7.777C8 19.022 9.249 20.32 11 21"></svg:path><svg:path d="M16 9.01C15.47 5.458 12.254 2 9.038 2C5.518 2 2 6.14 2 10.01c0 3.6 3.042 4.834 6.298 4.99M7.5 5l-1 1m4-1l1 1m3.5 6c2 0 4 2.226 4 4.308c0 1.248-.848 1.967-1.905 2.343c-.45.16-.793.56-.793 1.037v1.03a1.282 1.282 0 0 1-2.564 0v-1.03c0-.478-.342-.877-.793-1.035c-1.07-.376-1.945-1.095-1.945-2.345C11 14.226 13 12 15 12"></svg:path></svg:g>`,
})
export class HugeiconsMochiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
