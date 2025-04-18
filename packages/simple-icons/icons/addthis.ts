import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsAddthisIcon],svg[simple-icons-addthis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.496h-4.501v4.484h-3v-4.484H6v-2.99h4.5V6.021h3.001v4.485H18v2.99zM21 .041H3a3.004 3.004 0 0 0-3 2.99v17.94a3.004 3.004 0 0 0 3 2.988h18a3.005 3.005 0 0 0 3-2.988V3.031a3.005 3.005 0 0 0-3-2.99z"></svg:path>`,
})
export class SimpleIconsAddthisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
