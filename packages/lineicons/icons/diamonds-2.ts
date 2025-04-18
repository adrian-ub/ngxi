import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsDiamonds2Icon],svg[lineicons-diamonds-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.165 4.46A2.25 2.25 0 0 1 7.16 3.25h9.681a2.25 2.25 0 0 1 1.995 1.21l2.111 4.045a2.25 2.25 0 0 1-.283 2.502l-8.093 9.48a.75.75 0 0 1-1.14 0l-8.093-9.48a2.25 2.25 0 0 1-.284-2.502zm1.995.29a.75.75 0 0 0-.665.403L4.384 9.2a.75.75 0 0 0 .094.834l7.523 8.812l7.522-8.812a.75.75 0 0 0 .094-.834l-2.11-4.046a.75.75 0 0 0-.666-.403z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsDiamonds2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
