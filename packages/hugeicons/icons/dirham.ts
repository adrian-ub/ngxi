import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDirhamIcon],svg[hugeicons-dirham-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12.001c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10"></svg:path><svg:path d="m15.69 9.001l1.47 1.703c.788.912.117 2.296-1.112 2.297H15m-6-5v4.998m.5 4.501H11m-1.5 0H8m1.5 0c-.333-.333-.8-1.2 0-2c.633-.632 1.5.002 1.5.002m1-2.501v.01"></svg:path></svg:g>`,
})
export class HugeiconsDirhamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
