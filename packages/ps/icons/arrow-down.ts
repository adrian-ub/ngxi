import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psArrowDownIcon],svg[ps-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 0q-21 0-21 21v297l-94-77q-7-6-16-5t-14 7q-6 7-5 16t7 14l143 111l141-111q15-15 2-30q-16-14-30-2l-92 77V21q0-21-21-21"></svg:path>`,
})
export class PsArrowDownIcon {
  readonly viewBox = input("0 0 304 448")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
