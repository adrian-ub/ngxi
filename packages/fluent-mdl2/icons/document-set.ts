import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DocumentSetIcon],svg[fluent-mdl2-document-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1280h128v768H128V640h128V256h128V0h1408zM512 128v128h1024v1024h128V128zM384 384v256h347l640 640h37V384zm1408 1536v-512h-475L677 768H256v1152z"></svg:path>`,
})
export class FluentMdl2DocumentSetIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
