import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMedicine02Icon],svg[hugeicons-medicine-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.193 12.999a6 6 0 1 1-10.392 6m10.392-6a6 6 0 0 0-10.392 6m10.392-6l-10.392 6m.242-13.457l5.085-3.005c1.872-1.106 4.266-.45 5.347 1.467A4.08 4.08 0 0 1 20 8.682m-9.957-3.14L4.958 8.547c-1.872 1.106-2.514 3.556-1.433 5.472A3.9 3.9 0 0 0 6.5 16m3.543-10.458L11.5 8" color="currentColor"></svg:path>`,
})
export class HugeiconsMedicine02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
