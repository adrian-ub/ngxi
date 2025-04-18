import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSquareAcademicCap2LineDuotoneIcon],svg[solar-square-academic-cap-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3.092 6.637L9.782 3.5a5.17 5.17 0 0 1 4.435 0l6.691 3.137c1.456.682 1.456 3.044 0 3.726l-6.69 3.137a5.17 5.17 0 0 1-4.435 0L5 11.258"></svg:path><svg:path stroke-linejoin="round" d="M2.5 15v-2.862c0-1.28 0-1.92.33-2.42c.33-.501.919-.753 2.094-1.257L6 8" opacity=".5"></svg:path><svg:path d="M19 11.5v5.125c0 1.008-.503 1.952-1.385 2.44C16.146 19.88 13.796 21 12 21s-4.146-1.121-5.615-1.934C5.504 18.577 5 17.633 5 16.626V11.5" opacity=".5"></svg:path></svg:g>`,
})
export class SolarSquareAcademicCap2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
