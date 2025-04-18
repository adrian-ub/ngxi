import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScissorIcon],svg[hugeicons-scissor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m0 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0M15 8L3 19m12-3l-4-4M3 5l5.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsScissorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
