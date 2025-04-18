import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightShapeSquareIcon],svg[mdi-light-shape-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h17v17H3V4Zm1 1v15h15V5H4Z"></svg:path>`,
})
export class MdiLightShapeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
