import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciFilterOutlineIcon],svg[ci-filter-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L9 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1Zm-6.707 9.293A.996.996 0 0 0 13 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L5 6.59V5h14.001l.002 1.583l-5.71 5.71Z"></svg:path>`,
})
export class CiFilterOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
