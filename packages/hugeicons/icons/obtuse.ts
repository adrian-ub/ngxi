import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsObtuseIcon],svg[hugeicons-obtuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 17c0 .56-2 2-2 2m2-2c0-.56-2-2-2-2m2 2H11.505c-1.218 0-1.826 0-2.313-.305s-.753-.852-1.285-1.947l-5.198-10.7m0 0C2.238 4.32 2 6.706 2 6.706m.708-2.658c.47-.273 2.645.712 2.645.712"></svg:path><svg:path d="M6 10.803A6 6 0 0 1 14.917 17"></svg:path></svg:g>`,
})
export class HugeiconsObtuseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
