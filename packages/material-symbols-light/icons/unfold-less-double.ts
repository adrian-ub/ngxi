import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUnfoldLessDoubleIcon],svg[material-symbols-light-unfold-less-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.85 22.566l-.708-.708l3.883-3.864l3.864 3.864l-.708.713l-3.156-3.155zm0-5l-.708-.708l3.883-3.864l3.864 3.864l-.708.713l-3.156-3.155zM12.006 11l-3.87-3.87l.714-.732l3.156 3.156l3.169-3.156l.714.714zm0-5l-3.87-3.87l.714-.732l3.156 3.156l3.169-3.156l.714.714z"></svg:path>`,
})
export class MaterialSymbolsLightUnfoldLessDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
