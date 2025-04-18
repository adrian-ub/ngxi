import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCdIcon],svg[hugeicons-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M6.5 15.99a6.9 6.9 0 0 0 1.43 1.51m8.096-11c.569.44 1.067.972 1.474 1.573M14.5 12a2.5 2.5 0 1 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path></svg:g>`,
})
export class HugeiconsCdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
