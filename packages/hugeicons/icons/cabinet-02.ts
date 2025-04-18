import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCabinet02Icon],svg[hugeicons-cabinet-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 16L5 20m12.5-4l1.5 4m2-16H3l.215 5.16c.135 3.238.202 4.857 1.071 5.848c.869.992 2.22.992 4.922.992h5.585c2.701 0 4.052 0 4.92-.992c.87-.991.937-2.61 1.072-5.848zm-9 12V4m10 0H2m7 6h.009M15 10h.009" color="currentColor"></svg:path>`,
})
export class HugeiconsCabinet02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
