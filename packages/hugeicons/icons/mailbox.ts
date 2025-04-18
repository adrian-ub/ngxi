import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMailboxIcon],svg[hugeicons-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.5 19V8.5a6.5 6.5 0 0 1 13 0V19m.369 3H5.13c-.611 0-.917 0-1.061-.208c-.145-.207-.048-.508.145-1.108C4.56 19.608 4.909 19 6.149 19h11.702c1.24 0 1.588.608 1.934 1.684c.193.6.29.9.145 1.108c-.144.208-.45.208-1.061.208M10.5 11h3m-9-3h15" color="currentColor"></svg:path>`,
})
export class HugeiconsMailboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
