import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMediumIcon],svg[hugeicons-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="6.5" cy="12" r="4.5"></svg:circle><svg:ellipse cx="15.5" cy="12" rx="2.5" ry="4.5"></svg:ellipse><svg:ellipse cx="21" cy="12" rx="1" ry="4.5"></svg:ellipse></svg:g>`,
})
export class HugeiconsMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
