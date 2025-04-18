import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarReorderLineDuotoneIcon],svg[solar-reorder-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C3.098 15 3.565 15 4.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549C7 16.098 7 16.565 7 17.5s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C5.902 20 5.435 20 4.5 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C2 18.902 2 18.435 2 17.5Z"></svg:path><svg:path d="M9.5 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 15 11.065 15 12 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549C13.402 20 12.935 20 12 20s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549c-.201-.348-.201-.815-.201-1.75Z" opacity=".5"></svg:path><svg:path d="M17 17.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C18.098 15 18.565 15 19.5 15s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201s-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C17 18.902 17 18.435 17 17.5Z" opacity=".7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15V9c0-2.357 0-3.536.732-4.268S7.143 4 9.5 4h5c2.357 0 3.535 0 4.268.732S19.5 6.643 19.5 9v3m0 0l2-2m-2 2l-2-2"></svg:path></svg:g>`,
})
export class SolarReorderLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
