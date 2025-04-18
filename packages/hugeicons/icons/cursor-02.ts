import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursor02Icon],svg[hugeicons-cursor-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.428 3.524C5.492 1.302 21.013 6.745 21 8.733c-.015 2.253-6.061 2.947-7.737 3.417c-1.008.282-1.278.572-1.51 1.63C10.7 18.565 10.17 20.945 8.966 21c-1.92.084-7.552-15.308-5.539-17.476" color="currentColor"></svg:path>`,
})
export class HugeiconsCursor02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
