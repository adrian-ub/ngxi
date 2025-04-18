import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileImageIcon],svg[fluent-mdl2-file-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1920h1536v128H128V0h1115l549 549v91h-640V128H256zM1280 512h293l-293-293zm768 256v1024H640V768zM768 896v421l320-319l416 416l160-160l256 256V896zm987 768h139l-230-230l-69 70zm-987 0h805l-485-486l-320 321zm960-512q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19"></svg:path>`,
})
export class FluentMdl2FileImageIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
