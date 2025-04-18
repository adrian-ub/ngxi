import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsArrowAllDirectionIcon],svg[hugeicons-arrow-all-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.99 8.986v-5.67m0 17.354V15m8.68-3L15 11.948M9 12l-5.67-.052M15 6s-2.21-3-3-3s-3 3-3 3m-3 9s-3-2.21-3-3s3-3 3-3m12 0s3 2.21 3 3s-3 3-3 3m-9 3s2.21 3 3 3s3-3 3-3" color="currentColor"></svg:path>`,
})
export class HugeiconsArrowAllDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
