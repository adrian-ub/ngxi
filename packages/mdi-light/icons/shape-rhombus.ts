import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightShapeRhombusIcon],svg[mdi-light-shape-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.586 12.5L11.5 3.586l8.914 8.914l-8.914 8.914L2.586 12.5ZM11.5 5L4 12.5l7.5 7.5l7.5-7.5L11.5 5Z"></svg:path>`,
})
export class MdiLightShapeRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
