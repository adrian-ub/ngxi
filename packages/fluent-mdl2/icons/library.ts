import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LibraryIcon],svg[fluent-mdl2-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1792V256h384v1536zM768 384v1280h128V384zM128 1792V256h384v1536zM256 384v1280h128V384zm1235-151l484 1450l-346 116l-484-1450zm-204 186l412 1238l134-44l-413-1238z"></svg:path>`,
})
export class FluentMdl2LibraryIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
