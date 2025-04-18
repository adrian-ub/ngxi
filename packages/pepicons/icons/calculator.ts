import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCalculatorIcon],svg[pepicons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3Zm3 15a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5Z" clip-rule="evenodd"></svg:path><svg:path d="M5 7.5v-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5Zm7 8.2v-4.9a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.9a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8ZM5 12v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 12Zm3.5 0v-1.5A.5.5 0 0 1 9 10h1.5a.5.5 0 0 1 .5.5V12a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5ZM5 16v-1.5a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H5.5A.5.5 0 0 1 5 16Zm3.5 0v-1.5A.5.5 0 0 1 9 14h1.5a.5.5 0 0 1 .5.5V16a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5Z"></svg:path></svg:g>`,
})
export class PepiconsCalculatorIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
