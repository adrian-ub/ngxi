import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEraserSize1Icon],svg[material-symbols-light-eraser-size-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.423 18q-.575 0-.999-.424T6 16.577q0-.279.102-.526t.325-.47l9.154-9.154q.223-.223.48-.325q.256-.102.535-.102q.575 0 .99.415q.414.414.414 1.008q0 .279-.099.529t-.303.473l-9.173 9.154q-.204.223-.46.322T7.423 18"></svg:path>`,
})
export class MaterialSymbolsLightEraserSize1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
