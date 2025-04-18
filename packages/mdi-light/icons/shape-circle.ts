import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightShapeCircleIcon],svg[mdi-light-shape-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 3a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17Z"></svg:path>`,
})
export class MdiLightShapeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
