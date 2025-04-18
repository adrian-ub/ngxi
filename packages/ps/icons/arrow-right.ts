import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psArrowRightIcon],svg[ps-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M243 47q-15 15-2 30l77 94H21q-21 0-21 21t21 21h297l-77 94q-6 7-5 16t7 14q7 6 16 5t14-7l111-143L273 51q-13-16-30-4"></svg:path>`,
})
export class PsArrowRightIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
