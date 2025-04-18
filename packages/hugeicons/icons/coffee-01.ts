import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCoffee01Icon],svg[hugeicons-coffee-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="m5 7l1.76 10.405c.306 1.808.46 2.713 1 3.337c1.454 1.677 7.026 1.677 8.48 0c.54-.624.694-1.529 1-3.337L19 7M5 7l.743-1.712c.609-1.404.913-2.106 1.548-2.502c1.59-.993 7.654-1.102 9.418 0c.635.396.94 1.098 1.548 2.502L19 7M4 7h16"></svg:path><svg:ellipse cx="12" cy="14.5" rx="2" ry="2.5"></svg:ellipse></svg:g>`,
})
export class HugeiconsCoffee01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
