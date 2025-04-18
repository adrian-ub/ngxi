import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileCSSIcon],svg[fluent-mdl2-file-c-s-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 549v1499H128V0h1115zm-512-37h293l-293-293zm384 1408V640h-512V128H256v1792zM1472 896h64v896h-128v-256H987l-256 256H576zm-64 219l-293 293h293zM384 256h128v128H384zm0 256h128v128H384zm0 256h128v128H384z"></svg:path>`,
})
export class FluentMdl2FileCSSIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
