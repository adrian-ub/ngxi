import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TrimIcon],svg[fluent-mdl2-trim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 384H512V256h128zm768-128h128v128h-128zM640 640H512V512h128zm768-128h128v128h-128zM512 1664h128v128H512zm896 0h128v128h-128zm-896-256h128v128H512zm896 0h128v128h-128zM0 768h128v512H0zm256 0h128v512H256zm1408 0h128v512h-128zm384 0v512h-128V768zm-1536 0h1024v512H512zm128 384h768V896H640z"></svg:path>`,
})
export class FluentMdl2TrimIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
