import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCurveArrowRightIcon],svg[marketeq-curve-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M27.083 16.667c-14.791.583-20.833 12.77-20.833 25c0 0 8.083-11.855 20.833-12.5"></svg:path><svg:path stroke="#306CFE" d="M27.083 29.167V37.5L42.98 24.52a2.083 2.083 0 0 0 0-3.207L27.083 8.333v8.334"></svg:path></svg:g>`,
})
export class MarketeqCurveArrowRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
