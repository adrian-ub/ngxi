import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEaseOutControlPointIcon],svg[hugeicons-ease-out-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 21S11 5 22 5M11 5h2M6 5h2M6 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0" color="currentColor"></svg:path>`,
})
export class HugeiconsEaseOutControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
