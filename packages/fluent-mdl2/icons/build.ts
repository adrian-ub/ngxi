import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BuildIcon],svg[fluent-mdl2-build-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1280H384v-256h256zm1280-512v1152H128V768h128v640h1536V768zM896 1536H640v256h256zm512 0h-256v256h256zm-512-512h256v256H896zm768 256h-256v-256h256zM960 922L659 621l90-90l147 146V0h128v677l147-146l90 90z"></svg:path>`,
})
export class FluentMdl2BuildIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
