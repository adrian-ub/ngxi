import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggShapeRhombusIcon],svg[gg-shape-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.343L6.343 12L12 17.657L17.657 12zM2.1 12l9.9 9.9l9.9-9.9L12 2.1z" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
