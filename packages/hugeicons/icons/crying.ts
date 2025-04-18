import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCryingIcon],svg[hugeicons-crying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M15.5 21.37A10 10 0 0 1 12 22a10 10 0 0 1-3.5-.63M3.338 17A9.95 9.95 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 1.821-.487 3.53-1.338 5"></svg:path><svg:path d="M9 16c.836-.628 1.874-1 3-1s2.164.372 3 1M9.5 9.5H8.207c-.453 0-.887.18-1.207.5m7.5-.5h1.293c.453 0 .887.18 1.207.5M6 13v9m12-9v9"></svg:path></svg:g>`,
})
export class HugeiconsCryingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
