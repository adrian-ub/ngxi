import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StackIcon],svg[fluent-mdl2-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 640h256v1152H512v-256H256v-256H0V128h1536v256h256zM128 256v896h1280V256zm256 1024v128h1280V512h-128v768zm1536 384V768h-128v768H640v128z"></svg:path>`,
})
export class FluentMdl2StackIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
