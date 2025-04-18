import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ClearFormattingEraserIcon],svg[fluent-mdl2-clear-formatting-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m704 1434l422 422l-65 64H731l-211-211q-19-19-19-45t19-45zm640-640l422 422l-550 550l-422-422z"></svg:path>`,
})
export class FluentMdl2ClearFormattingEraserIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
