import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAmieIcon],svg[hugeicons-amie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3 8.5c0 1.33.472 2.55 1.257 3.5A5.5 5.5 0 0 0 12 19.743A5.5 5.5 0 0 0 19.743 12A5.5 5.5 0 0 0 12 4.257A5.5 5.5 0 0 0 3 8.5"></svg:path><svg:path d="M10.5 9.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0z"></svg:path></svg:g>`,
})
export class HugeiconsAmieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
