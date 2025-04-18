import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2VerticalDistributeCenterIcon],svg[fluent-mdl2-vertical-distribute-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 512v128h-512v256H512V640H0V512h512V256h1024v256zm-640-128H640v384h768zm384 1024h256v128h-256v256H256v-256H0v-128h256v-256h1536zm-128-128H384v384h1280z"></svg:path>`,
})
export class FluentMdl2VerticalDistributeCenterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
