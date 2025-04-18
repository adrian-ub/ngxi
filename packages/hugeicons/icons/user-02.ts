import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsUser02Icon],svg[hugeicons-user-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.75 7.5A4.26 4.26 0 0 0 12 11.75a4.26 4.26 0 0 0 4.25-4.25A4.26 4.26 0 0 0 12 3.25A4.26 4.26 0 0 0 7.75 7.5m1.5 0c0-1.52 1.23-2.75 2.75-2.75s2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75S9.25 9.02 9.25 7.5m8.5 12.5c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-1.65-.81-3.06-2.13-3.66c-3.07-1.38-7.16-1.39-10.24 0c-1.32.6-2.13 2-2.13 3.66V20c0 .41.34.75.75.75s.75-.34.75-.75v-2.03c0-.84.33-1.88 1.25-2.3c2.69-1.21 6.32-1.21 9 0c.92.43 1.25 1.47 1.25 2.3z" color="currentColor"></svg:path>`,
})
export class HugeiconsUser02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
