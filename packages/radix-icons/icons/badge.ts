import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBadgeIcon],svg[radix-icons-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 6h8a1.5 1.5 0 0 1 0 3h-8a1.5 1.5 0 1 1 0-3M1 7.5A2.5 2.5 0 0 1 3.5 5h8a2.5 2.5 0 0 1 0 5h-8A2.5 2.5 0 0 1 1 7.5M4.5 7a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsBadgeIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
