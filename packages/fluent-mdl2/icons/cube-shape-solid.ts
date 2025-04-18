import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CubeShapeSolidIcon],svg[fluent-mdl2-cube-shape-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960 152l750 376l-750 375l-750-375zM128 1607V665l768 384v942zm896-558l768-384v942l-768 384z"></svg:path>`,
})
export class FluentMdl2CubeShapeSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
