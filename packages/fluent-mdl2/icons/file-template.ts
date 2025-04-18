import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileTemplateIcon],svg[fluent-mdl2-file-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1243 0l549 549v219h-128V640h-512V128H256v1792h768v128H128V0zm37 512h293l-293-293zm640 1408h128v128h-128zm-256 0h128v128h-128zm-256 0h128v128h-128zm256-1024h128v128h-128zm-256 0h128v128h-128zm-256 1024h128v128h-128zm768-256h128v128h-128zm-768 0h128v128h-128zm768-256h128v128h-128zm-768 0h128v128h-128zm768-256h128v128h-128zm-768 0h128v128h-128zm896-256v128h-128V896zm-896 0h128v128h-128z"></svg:path>`,
})
export class FluentMdl2FileTemplateIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
