import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsScooter02Icon],svg[hugeicons-scooter-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 16c0-3.182 2.239-5 5-5s5 1.818 5 5zm3-8h4m1 8a3 3 0 1 1-6 0"></svg:path><svg:circle cx="20" cy="17" r="2"></svg:circle><svg:path d="M16 8c1.333.638 4 3.174 4 7M15.99 5h.547c.984 0 1.888.58 2.344 1.503c.315.64 0 1.497-.896 1.497H15.99m0-3v3m0-3h-3.046m3.046 3c0 1.913-.212 8-3.99 8h5.666"></svg:path></svg:g>`,
})
export class HugeiconsScooter02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
