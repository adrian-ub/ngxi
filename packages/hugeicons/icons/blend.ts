import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBlendIcon],svg[hugeicons-blend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="17" cy="17" r="5"></svg:circle><svg:path d="M7.5 13H6.4c-2.074 0-3.111 0-3.756-.644C2 11.71 2 10.674 2 8.6V6.4c0-2.074 0-3.111.644-3.756C3.29 2 4.326 2 6.4 2h2.2c2.074 0 3.111 0 3.756.644C13 3.29 13 4.326 13 6.4v1.1"></svg:path><svg:path d="M12.035 19a6.043 6.043 0 0 1 1.007-12A6.04 6.04 0 0 1 19 12.035"></svg:path></svg:g>`,
})
export class HugeiconsBlendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
