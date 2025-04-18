import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BoardsIcon],svg[fluent-mdl2-boards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 512h256v1536H640v-256H384v-256H128V0h1280v256h256zM384 1408V256h896V128H256v1280zm256 256V512h896V384H512v1280zm1152 256V640H768v1280z"></svg:path>`,
})
export class FluentMdl2BoardsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
