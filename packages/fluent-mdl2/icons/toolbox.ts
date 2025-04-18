import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ToolboxIcon],svg[fluent-mdl2-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 512h640v1152H0V512h640V256h768zM768 384v128h512V384zm1152 256H128v256h384V768h128v128h768V768h128v128h384zM128 1536h1792v-512h-384v128h-128v-128H640v128H512v-128H128z"></svg:path>`,
})
export class FluentMdl2ToolboxIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
