import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ModelingViewIcon],svg[fluent-mdl2-modeling-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 896h-896V384H512v256h384v896H512v256h640v-640h896v896h-896v-128H384v-384H0V640h384V256h768V0h896zm-768-768v128h640V128zm0 256v384h640V384zm0 896v128h640v-128zm0 256v384h640v-384zm-512-128v-384H128v384zm0-640H128v128h640z"></svg:path>`,
})
export class FluentMdl2ModelingViewIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
