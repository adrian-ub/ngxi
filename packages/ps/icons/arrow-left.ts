import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psArrowLeftIcon],svg[ps-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 192l111 141q15 15 30 2q14-16 2-30l-77-92h297q21 0 21-21t-21-21H66l77-94q6-7 5-16t-7-14q-17-12-30 4z"></svg:path>`,
})
export class PsArrowLeftIcon {
  readonly viewBox = input("0 0 384 448")
  readonly width = input("0.86em")
  readonly height = input("1em")
}
