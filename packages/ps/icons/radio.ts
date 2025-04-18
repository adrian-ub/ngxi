import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psRadioIcon],svg[ps-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 341q62 0 105.5-43.5T301 192T257.5 86.5T152 43T46.5 86.5T3 192t43.5 105.5T152 341m0-256q45 0 76 31t31 76t-31 76t-76 31t-76-31t-31-76t31-76t76-31m43 107q0 18-12.5 30.5T152 235t-30.5-12.5T109 192t12.5-30.5T152 149t30.5 12.5T195 192"></svg:path>`,
})
export class PsRadioIcon {
  readonly viewBox = input("0 0 304 448")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
