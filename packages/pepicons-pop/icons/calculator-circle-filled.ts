import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopCalculatorCircleFilledIcon],svg[pepicons-pop-calculator-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopCalculatorCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M5 6v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3m3 15a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path><svg:path d="M8 10.5v-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5m7 8.2v-4.9a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.9a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8M8 15v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H8.5A.5.5 0 0 1 8 15m3.5 0v-1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5M8 19v-1.5a.5.5 0 0 1 .5-.5H10a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H8.5A.5.5 0 0 1 8 19m3.5 0v-1.5a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 .5.5V19a.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopCalculatorCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopCalculatorCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
