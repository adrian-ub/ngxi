import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLegal02Icon],svg[hugeicons-legal-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m14.001 9.798l-9.608.694c-1.289.093-2.392-.826-2.392-1.994c0-1.167 1.103-2.086 2.392-1.993l9.608.694"></svg:path><svg:path d="M21 13.998h-7.999m8-11h-8m7 0h-6s-.5 2.962-.5 5.5c0 2.539.5 5.5.5 5.5h6s.5-2.961.5-5.5c0-2.538-.5-5.5-.5-5.5m-8 18.004h9.998m-8.773 0c.551-.988.963-2.877 2.915-2.983c.58-.032 1.17-.032 1.75 0c1.951.106 2.365 1.995 2.917 2.983"></svg:path></svg:g>`,
})
export class HugeiconsLegal02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
