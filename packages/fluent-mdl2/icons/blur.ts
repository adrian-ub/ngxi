import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BlurIcon],svg[fluent-mdl2-blur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 128H256V0h128zm256 0H512V0h128zm256 0H768V0h128zm256 256h-128V256h128zm256 256h-128V512h128zm256 256h-128V768h128zm-512-768h-128V0h128zm384 256h-128V256h128zm0 128V384h128v128zm256 256h128v128h-128zM640 384H512V256h128zm256 0H768V256h128zm256 256h-128V512h128zm256 256h-128V768h128zM896 640H768V512h128zm256 256h-128V768h128zm256 256h-128v-128h128zM256 384V256h128v128zm128 128V384h128v128zm128 128V512h128v128zm128 128V640h128v128zm128 128V768h128v128zm128 128V896h128v128zm128 128v-128h128v128zm128 128v-128h128v128zm128 128v-128h128v128zm128 128v-128h128v128zm128 128v-128h128v128zm128 0h128v128h128v128H0V0h128v128h128v128H128v1536h1536zm128-128h128v128h-128zm0-256h128v128h-128zm0-256h128v128h-128zm-128 384h-128v-128h128zm-128-384h128v128h-128zm0-896h-128V0h128zm256 256h128v128h-128zM1920 0v128h-128V0z"></svg:path>`,
})
export class FluentMdl2BlurIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
