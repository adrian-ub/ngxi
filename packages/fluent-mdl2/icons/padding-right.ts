import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PaddingRightIcon],svg[fluent-mdl2-padding-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1920h128V0zm2048 0h-128v128h128zm0 1792h-128v128h128zm0-1536h-128v256h128zm0 384h-128v256h128zm0 384h-128v256h128zm0 384h-128v256h128zm-603-512H384v128h1061l-210 211l90 90l365-365l-365-365l-90 90z"></svg:path>`,
})
export class FluentMdl2PaddingRightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
