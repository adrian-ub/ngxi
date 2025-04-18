import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDrinkIcon],svg[tdesign-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.48 1H20v2h-4.02l-.65 2.222h4.74L18.858 23H6.217l-.87-12.722C3.475 9.863 2 8.239 2 6.222c0-2.32 1.914-4.166 4.231-4.166c1.973 0 3.653 1.337 4.11 3.166h2.904zm-1.82 6.222H7.145l.236 3.482l4.067.661zm-.664 6.258l-4.475-.727L8.085 21h8.904l.451-6.616l-5.44-.903zm5.581-1.1l.352-5.158h-3.185l-1.308 4.47zM8.211 5.221a2.23 2.23 0 0 0-1.98-1.166C4.98 4.056 4 5.045 4 6.222c0 .797.48 1.523 1.201 1.896l-.197-2.896z"></svg:path>`,
})
export class TdesignDrinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
