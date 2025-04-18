import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EventInfoIcon],svg[fluent-mdl2-event-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1792H0V128h384V0h128v128h1024V0h128v128zM128 256v256h1792V256h-256v128h-128V256H512v128H384V256zm1792 1536V640H128v1152zM896 1024h128v640H896zm64-256q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19"></svg:path>`,
})
export class FluentMdl2EventInfoIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
