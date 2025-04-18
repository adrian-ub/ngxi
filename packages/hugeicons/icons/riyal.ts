import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRiyalIcon],svg[hugeicons-riyal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M18 11v1a3 3 0 0 1-3 3m-4-7v4.5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1M8.5 8v4.5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1m5.5 2.99v.01m2 0v.01"></svg:path></svg:g>`,
})
export class HugeiconsRiyalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
