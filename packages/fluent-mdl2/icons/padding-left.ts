import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PaddingLeftIcon],svg[fluent-mdl2-padding-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 0v1920h-128V0zM0 0h128v128H0zm0 1792h128v128H0zM0 256h128v256H0zm0 384h128v256H0zm0 384h128v256H0zm0 384h128v256H0zm603-512h1061v128H603l210 211l-90 90l-365-365l365-365l90 90z"></svg:path>`,
})
export class FluentMdl2PaddingLeftIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
