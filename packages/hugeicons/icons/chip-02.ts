import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChip02Icon],svg[hugeicons-chip-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="6"></svg:circle><svg:path d="M12 12c-.828 0-1.5.56-1.5 1.25s.672 1.25 1.5 1.25s1.5-.56 1.5-1.25S12.828 12 12 12m0 0c.828 0 1.5-.56 1.5-1.25S12.828 9.5 12 9.5s-1.5.56-1.5 1.25S11.172 12 12 12m0-10v4m0 12v4m10-10h-4M6 12H2"></svg:path></svg:g>`,
})
export class HugeiconsChip02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
