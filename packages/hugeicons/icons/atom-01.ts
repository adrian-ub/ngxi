import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAtom01Icon],svg[hugeicons-atom-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="M22 9h-.01M2.01 9H2m10.005 13h-.01m-4.439-1A9.98 9.98 0 0 1 2 13.127M16.444 21A9.98 9.98 0 0 0 22 13.127M5.556 4.257a10.016 10.016 0 0 1 12.666 0"></svg:path></svg:g>`,
})
export class HugeiconsAtom01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
