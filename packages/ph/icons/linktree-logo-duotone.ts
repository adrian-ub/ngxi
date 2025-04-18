import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phLinktreeLogoDuotoneIcon],svg[ph-linktree-logo-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 104a80 80 0 1 1-80-80a80 80 0 0 1 80 80" opacity=".2"></svg:path><svg:path d="M136 160v72a8 8 0 0 1-16 0v-72a8 8 0 0 1 16 0m72-64h-60.69l42.35-42.34a8 8 0 0 0-11.32-11.32L136 84.69V24a8 8 0 0 0-16 0v60.69L77.66 42.34a8 8 0 0 0-11.32 11.32L108.69 96H48a8 8 0 0 0 0 16h60.69l-42.35 42.34a8 8 0 0 0 11.32 11.32L128 115.31l50.34 50.35a8 8 0 0 0 11.32-11.32L147.31 112H208a8 8 0 0 0 0-16"></svg:path></svg:g>`,
})
export class PhLinktreeLogoDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
