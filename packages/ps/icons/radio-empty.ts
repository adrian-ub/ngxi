import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psRadioEmptyIcon],svg[ps-radio-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M301 192q0-62-43.5-105.5T152 43T46.5 86.5T3 192t43.5 105.5T152 341t105.5-43.5T301 192m-256 0q0-45 31-76t76-31t76 31t31 76t-31 76t-76 31t-76-31t-31-76"></svg:path>`,
})
export class PsRadioEmptyIcon {
  readonly viewBox = input("0 0 304 448")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
