import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psArrowUpIcon],svg[ps-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M297 141q6-7 5-16t-7-14L152 0L11 111q-15 15-2 30q16 14 30 2l92-77v297q0 21 21 21t21-21V66l94 77q17 15 30-2"></svg:path>`,
})
export class PsArrowUpIcon {
  readonly viewBox = input("0 0 304 448")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
