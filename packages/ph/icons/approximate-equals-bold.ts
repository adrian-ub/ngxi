import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phApproximateEqualsBoldIcon],svg[ph-approximate-equals-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225.24 150.73a12 12 0 0 1-1.58 16.9C205.49 182.7 189.06 188 174.15 188c-19.76 0-36.86-9.29-51.88-17.44c-25.06-13.62-44.86-24.37-74.61.3a12 12 0 1 1-15.32-18.48c42.25-35 75-17.23 101.39-2.92c25.06 13.61 44.86 24.37 74.61-.31a12 12 0 0 1 16.9 1.58M47.66 106.85c29.75-24.68 49.55-13.92 74.61-.31c15 8.16 32.12 17.45 51.88 17.45c14.91 0 31.34-5.3 49.51-20.37a12 12 0 0 0-15.32-18.48c-29.75 24.67-49.55 13.92-74.61.3c-26.35-14.3-59.14-32.11-101.39 2.93a12 12 0 0 0 15.32 18.48"></svg:path>`,
})
export class PhApproximateEqualsBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
