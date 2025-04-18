import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHexagonalPyramidPlusIcon],svg[tabler-hexagonal-pyramid-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18.642 12.04l-5.804-9.583a.996.996 0 0 0-1.676 0L3.316 15.411a1.99 1.99 0 0 0 .267 2.483l2.527 2.523c.374.373.88.583 1.408.583H12.5M12 2L7 20.9M12 2l3.304 12.489M16 19h6m-3-3v6"></svg:path>`,
})
export class TablerHexagonalPyramidPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
