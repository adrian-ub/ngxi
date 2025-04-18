import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBlushBrush01Icon],svg[hugeicons-blush-brush-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.065 11.032l-5.182 1.791c-2.447.915.852 5.134 1.947 6.224s5.502 4.536 6.421 2.101l1.743-5.212m-9.76.554l2.702-1.378m1.703 5.386l1.254-2.443m3.733-9.805l1.003-.998c.394-.392 1.082-.319 1.476.074l1.564 1.556a1 1 0 0 1 0 1.42l-1.002.997a2 2 0 0 0-.562 1.082l-.495 2.877c-.138.803-1.13 1.117-1.709.54l-4.538-4.787c-.58-.576-.474-1.5.333-1.637l2.892-.492c.412-.07.743-.339 1.038-.633m4.318.754l4.583-4.742c1.357-1.35-.509-3.1-1.808-1.808l-4.794 4.54" color="currentColor"></svg:path>`,
})
export class HugeiconsBlushBrush01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
