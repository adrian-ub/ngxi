import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HorizontalDistributeCenterIcon],svg[fluent-mdl2-horizontal-distribute-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 256h256v1536H640v256H512v-256H256V256h256V0h128zm128 128H384v1280h384zm1024 1152h-256v512h-128v-512h-256V512h256V0h128v512h256zm-128-896h-384v768h384z"></svg:path>`,
})
export class FluentMdl2HorizontalDistributeCenterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
