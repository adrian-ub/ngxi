import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPinterestLogoBoldIcon],svg[ph-pinterest-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 112c0 23.6-8.29 45.23-23.35 60.88C190.52 187.57 171.33 196 152 196c-15.45 0-26.78-4.18-34.89-9.31l-9.43 40.06a12 12 0 1 1-23.36-5.5l32-136a12 12 0 1 1 23.36 5.5l-16.45 69.93C126.72 164.86 135.16 172 152 172c25.56 0 52-22.45 52-60a68 68 0 1 0-126.91 34a12 12 0 0 1-20.77 12A92 92 0 1 1 228 112"></svg:path>`,
})
export class PhPinterestLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
