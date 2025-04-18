import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCoinsStackIcon],svg[streamline-coins-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 7.5c2.485 0 4.5-.895 4.5-2s-2.015-2-4.5-2s-4.5.895-4.5 2s2.015 2 4.5 2"></svg:path><svg:path d="M4.5 5.5v6c0 1.1 2 2 4.5 2s4.5-.9 4.5-2v-6"></svg:path><svg:path d="M13.5 8.5c0 1.1-2 2-4.5 2s-4.5-.9-4.5-2m4.4-6.991a6.77 6.77 0 0 0-3.9-1c-2.49 0-4.5.9-4.5 2c0 .59.58 1.12 1.5 1.5"></svg:path><svg:path d="M2 10.009c-.92-.38-1.5-.91-1.5-1.5v-6"></svg:path><svg:path d="M2 7.009c-.92-.38-1.5-.91-1.5-1.5"></svg:path></svg:g>`,
})
export class StreamlineCoinsStackIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
