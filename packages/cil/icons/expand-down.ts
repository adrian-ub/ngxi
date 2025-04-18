import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilExpandDownIcon],svg[cil-expand-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16h480v32H16zm0 480h480V368H16Zm32-96h416v64H48ZM416 96H96v37.86l159.923 169.364L416 135.921ZM256.077 256.776L134.478 128h244.813Z"></svg:path>`,
})
export class CilExpandDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
