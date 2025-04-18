import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FullWidthIcon],svg[fluent-mdl2-full-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 256v1536H0V256zm-128 128h-384v256h-128V384H640v256H512V384H128v1280h384v-128h128v128h768v-128h128v128h384zM512 768h128v256H512zm0 384h128v256H512zm896-384h128v256h-128zm0 384h128v256h-128z"></svg:path>`,
})
export class FluentMdl2FullWidthIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
