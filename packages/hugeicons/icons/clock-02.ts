import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsClock02Icon],svg[hugeicons-clock-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m5.048 8.607l-2.51-.153C4.338 3.704 9.503 1 14.54 2.344c5.364 1.433 8.55 6.917 7.117 12.25c-1.434 5.332-6.945 8.494-12.31 7.061A10.04 10.04 0 0 1 2 13.485"></svg:path><svg:path d="M12 8v4l2 2"></svg:path></svg:g>`,
})
export class HugeiconsClock02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
