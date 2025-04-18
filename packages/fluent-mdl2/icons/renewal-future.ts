import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2RenewalFutureIcon],svg[fluent-mdl2-renewal-future-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v1792H0V128h384V0h128v128h1024V0h128v128zM128 256v256h1792V256h-256v128h-128V256H512v128H384V256zm1792 1536V640H128v1152zm-870-576l-429 429l-90-90l339-339l-339-339l90-90zm83-429l429 429l-429 429l-90-90l339-339l-339-339z"></svg:path>`,
})
export class FluentMdl2RenewalFutureIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
