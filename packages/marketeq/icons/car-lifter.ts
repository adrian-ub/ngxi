import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCarLifterIcon],svg[marketeq-car-lifter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m14.583 43.75l20.834-14.583l-20.834-14.584"></svg:path><svg:path stroke="#344054" d="M35.417 14.583L14.583 29.167L35.417 43.75"></svg:path><svg:path stroke="#306CFE" d="M6.25 43.75h37.5m-2.083-29.167H8.333A2.083 2.083 0 0 1 6.25 12.5V8.333A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083V12.5a2.083 2.083 0 0 1-2.083 2.083"></svg:path></svg:g>`,
})
export class MarketeqCarLifterIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
