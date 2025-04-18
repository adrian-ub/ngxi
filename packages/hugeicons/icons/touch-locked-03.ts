import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouchLocked03Icon],svg[hugeicons-touch-locked-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.5 12c-.337-.712-.735-1.262-1.435-1.682c-.679-.406-1.643-.551-3.572-.84L11.505 9V3.75a1.75 1.75 0 1 0-3.5 0v9.75l-2.134-1.829a1.74 1.74 0 0 0-2.482 2.417l3.359 4.134C7.785 19.499 8.304 20.137 9 20.515q.187.102.385.183c.64.264 1.348.297 2.615.301m3-1.499c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C16.098 17 16.565 17 17.5 17h1c.935 0 1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75s0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201h-1c-.935 0-1.402 0-1.75-.201a1.5 1.5 0 0 1-.549-.549C15 20.902 15 20.435 15 19.5"></svg:path><svg:path d="M16.5 15.5a1.5 1.5 0 0 1 3 0V17h-3z"></svg:path></svg:g>`,
})
export class HugeiconsTouchLocked03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
