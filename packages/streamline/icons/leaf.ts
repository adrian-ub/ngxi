import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLeafIcon],svg[streamline-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.51 5.391c2 2.817.47 6.043-.27 7.301a1.42 1.42 0 0 1-1 .66c-1.45.25-5.06.529-7-2.288c-1.91-2.656-1.83-7.33-1.66-9.558A1.048 1.048 0 0 1 3 .568c2.15.619 6.63 2.167 8.51 4.823"></svg:path><svg:path d="M4.77 4.463a52 52 0 0 1 6 8.719"></svg:path></svg:g>`,
})
export class StreamlineLeafIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
