import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBabyBed02Icon],svg[hugeicons-baby-bed-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 7v8m4-8v8M8 7v8m14 2c-2.665 1.867-6.166 3-10 3s-7.335-1.133-10-3"></svg:path><svg:path d="M20 18V6a2 2 0 0 1 2-2M4 18V6a2 2 0 0 0-2-2m2 3h16M4 15h16"></svg:path></svg:g>`,
})
export class HugeiconsBabyBed02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
