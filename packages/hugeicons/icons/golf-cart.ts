import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGolfCartIcon],svg[hugeicons-golf-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.998 18.982c-.925 0-1.998.236-1.998-.995V15.84c0-1.72 0-2.58.499-3.144c.78-.88 2.289-.674 3.337-.674c.809 0 1.805-.112 2.49.411c.454.347.67.92 1.102 2.066c.165.438.283 1.044.688 1.324c.257.177.592.177 1.262.177h2.112c1.323 0 1.771-1.026 2.498-1.99h1.554c2.19 0 4.218 1.277 4.425 3.632c.041.471.155 1.34-.54 1.34h-1.443m-3.997 0H8.495"></svg:path><svg:circle cx="6" cy="19" r="2"></svg:circle><svg:circle cx="18" cy="19" r="2"></svg:circle><svg:path d="M4 12V3m15 11L16 3M2 3h16m-2 11l-2-3m-1 1l2-2m-8.5 2c0-2.03-.12-4-2.5-4"></svg:path></svg:g>`,
})
export class HugeiconsGolfCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
