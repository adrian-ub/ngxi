import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCurrencyJpyLightIcon],svg[ph-currency-jpy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m204.64 51.8l-64 78.2H176a6 6 0 0 1 0 12h-42v20h42a6 6 0 0 1 0 12h-42v42a6 6 0 0 1-12 0v-42H80a6 6 0 0 1 0-12h42v-20H80a6 6 0 0 1 0-12h35.34l-64-78.2a6 6 0 1 1 9.28-7.6L128 126.53l67.36-82.33a6 6 0 0 1 9.28 7.6"></svg:path>`,
})
export class PhCurrencyJpyLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
