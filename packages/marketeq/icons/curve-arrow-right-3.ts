import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCurveArrowRight3Icon],svg[marketeq-curve-arrow-right-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m31.25 33.333l11.688-8.791a2.083 2.083 0 0 0 0-3.25L31.25 12.5"></svg:path><svg:path stroke="#306CFE" d="M18.75 33.333v-6.25c-8.896 0-12.5 10.417-12.5 10.417c0-8.77 2.23-18.75 12.5-18.75V12.5l14.083 10.417z"></svg:path></svg:g>`,
})
export class MarketeqCurveArrowRight3Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
