import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsChemistry02Icon],svg[hugeicons-chemistry-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M5 3v10c0 3.771 0 5.657 1.172 6.828S9.229 21 13 21h8M3 9h8m9 0h-4"></svg:path><svg:path d="M15.247 4v2.558c0 1.142 0 1.713.147 2.26c.147.549.435 1.052 1.012 2.059l.781 1.364c1.47 2.565 2.205 3.848 1.602 4.799l-.01.014C18.168 18 16.612 18 13.5 18s-4.668 0-5.28-.946l-.009-.014c-.603-.951.132-2.234 1.602-4.799l.781-1.364c.577-1.007.865-1.51 1.012-2.058s.147-1.12.147-2.261V4M10.5 4h6"></svg:path></svg:g>`,
})
export class HugeiconsChemistry02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
