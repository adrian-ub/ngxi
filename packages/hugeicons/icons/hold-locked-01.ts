import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHoldLocked01Icon],svg[hugeicons-hold-locked-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 5.5a1.5 1.5 0 0 1 3 0V11m-3-5.5v-2a1.5 1.5 0 0 0-3 0V5m3 .5V10m-3-5a1.5 1.5 0 0 0-3 0v8.462l-1.62-1.625a1.683 1.683 0 0 0-2.51.14a1.696 1.696 0 0 0-.033 2.072l3.6 4.598C7.626 19.527 8 20.883 8 22m2.5-17v4m9 2V7.5a1.5 1.5 0 0 0-3 0m-1.5 12c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C16.098 17 16.565 17 17.5 17h1c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-1c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C15 20.902 15 20.435 15 19.5m1.5-4a1.5 1.5 0 0 1 3 0V17h-3z" color="currentColor"></svg:path>`,
})
export class HugeiconsHoldLocked01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
