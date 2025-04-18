import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTasbihIcon],svg[hugeicons-tasbih-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.707 3.728a1.73 1.73 0 1 1-3.459.002a1.73 1.73 0 0 1 3.459-.002m-4.428 1.829a1.73 1.73 0 1 1-3.459.001a1.73 1.73 0 0 1 3.459-.001m-1.832 4.452a1.73 1.73 0 1 1-3.458.001a1.73 1.73 0 0 1 3.458-.001m1.813 4.436a1.73 1.73 0 1 1-3.458.002a1.73 1.73 0 0 1 3.459-.002m4.449 1.848a1.73 1.73 0 1 1-3.458.001a1.73 1.73 0 0 1 3.459-.001m4.45-1.848a1.73 1.73 0 1 1-3.459.002a1.73 1.73 0 0 1 3.46-.002m1.836-4.436a1.73 1.73 0 1 1-3.458 0a1.73 1.73 0 0 1 3.458 0m-1.837-4.438a1.73 1.73 0 1 1-3.459.002a1.73 1.73 0 0 1 3.46-.002"></svg:path><svg:path d="m7.759 14.847l-4.872 2.454c-.727.394-1.16.852-.687 1.698c.2.37.622.992 1.23 1.603m5.717-4.368L6.699 21.09c-.55 1.09-1.076.964-1.509.808a6.7 6.7 0 0 1-1.76-1.297m0 0l1.675-1.71"></svg:path></svg:g>`,
})
export class HugeiconsTasbihIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
