import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotate360Icon],svg[hugeicons-rotate-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.437 12.506c2.985-5.503 1.624-9.24-3.482-9.506c-3.712.07-7.54 2.07-10.596 5.164c-2.565 2.597-5.09 6.315-4.163 9.854c.205.781.604 1.314 1.234 1.815c1.694 1.346 3.357 1.465 6.56.678c3.244-.985 5.255-2.47 6.95-3.99m0 0l.006-.004q.003-.006-.004-.008l-.004.006zm0 0c.37 1.096.136 2.073-.502 3.99" color="currentColor"></svg:path>`,
})
export class HugeiconsRotate360Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
