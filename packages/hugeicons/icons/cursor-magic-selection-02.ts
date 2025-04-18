import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCursorMagicSelection02Icon],svg[hugeicons-cursor-magic-selection-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.03 3.5V2M5 5L4 4m-.5 5.03H2M5 13l-1 1M14 4l-1 1M8.333 8.407C9.938 6.68 22.01 10.913 22 12.46c-.011 1.752-4.714 2.292-6.018 2.658c-.784.22-.994.445-1.175 1.267c-.818 3.723-1.23 5.574-2.166 5.616c-1.493.066-5.874-11.906-4.308-13.593" color="currentColor"></svg:path>`,
})
export class HugeiconsCursorMagicSelection02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
