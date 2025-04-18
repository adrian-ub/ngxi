import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDoom3Icon],svg[arcticons-doom-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.568 11.598H4.5m36.932 0H43.5M13.846 25.005L6.568 30.47V11.598h7.278zm1.918-1.277l4.913 3.689l2.364-1.952V11.598h-7.277zm16.472 0l-4.913 3.689l-2.364-1.952V11.598h7.277zm9.196 6.742V11.598h-1.273L37.738 27.05l-2.312-15.452h-1.272v13.407m-12.773 9.119L24 36.402l2.619-2.278L24 31.846l2.619-2.278L24 27.29l-2.619 2.278"></svg:path>`,
})
export class ArcticonsDoom3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
