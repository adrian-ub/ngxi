import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ScopeTemplateIcon],svg[fluent-mdl2-scope-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1792h512v128H128V0h1792v768h-128V512H256zm0-1664v256h1536V128zm640 768h384v128h-256v256H896zm1152 0v384h-128v-256h-256V896zM1024 1920h256v128H896v-384h128zm896-256h128v384h-384v-128h256z"></svg:path>`,
})
export class FluentMdl2ScopeTemplateIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
