import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSleepingIcon],svg[hugeicons-sleeping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13 2.05Q12.507 2 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10q-.002-1.03-.2-2"></svg:path><svg:path d="M10 11H8.707c-.453 0-.887-.18-1.207-.5m6.5.5h1.293c.453 0 .887-.18 1.207-.5"></svg:path><svg:circle cx="12" cy="16" r="2"></svg:circle><svg:path d="M17 2h2.947c.62 0 .93 0 1.013.2s-.128.44-.55.92l-2.425 2.76c-.422.48-.633.72-.55.92s.392.2 1.012.2H21"></svg:path></svg:g>`,
})
export class HugeiconsSleepingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
