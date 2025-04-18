import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFilter1Icon],svg[tdesign-filter-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.55 5.5c.039.038.098.089.189.152c.306.213.815.445 1.533.656C7.695 6.727 9.72 7 12 7s4.305-.273 5.728-.692c.718-.21 1.227-.443 1.533-.656c.091-.063.15-.114.188-.152a1.4 1.4 0 0 0-.188-.152c-.306-.213-.814-.445-1.533-.656C16.305 4.273 14.28 4 12 4s-4.305.273-5.728.692c-.718.21-1.227.443-1.533.656c-.091.063-.15.114-.188.152m12.624 3.007C15.694 8.821 13.906 9 12 9s-3.693-.179-5.174-.493L11 13.645v6.184A3 3 0 0 0 13 17v-3.355zM21.5 5.5v.855l-6.5 8V17a5 5 0 0 1-5 5H9v-7.645l-6.5-8V5.5c0-.84.572-1.43 1.097-1.794c.554-.385 1.29-.692 2.11-.933C7.36 2.287 9.585 2 12 2s4.64.287 6.293.773c.82.241 1.556.548 2.11.933c.524.365 1.097.955 1.097 1.794"></svg:path>`,
})
export class TdesignFilter1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
