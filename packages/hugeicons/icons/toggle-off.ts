import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsToggleOffIcon],svg[hugeicons-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path d="M16 6H8a6 6 0 1 0 0 12h8a6 6 0 0 0 0-12"></svg:path></svg:g>`,
})
export class HugeiconsToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
