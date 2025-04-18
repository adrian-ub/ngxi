import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BorderDotIcon],svg[fluent-mdl2-border-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h128v128H0zm384 0h128v128H384zm384 0h128v128H768zm384 0h128v128h-128zm384 0h128v128h-128zm512 0v128h-128V0zM0 1920h128v128H0zm384 0h128v128H384zm384 0h128v128H768zm384 0h128v128h-128zm384 0h128v128h-128zM0 1536h128v128H0zm0-384h128v128H0zm0-384h128v128H0zm0-384h128v128H0zm1920 1152h128v128h-128zm0-384h128v128h-128zm0-384h128v128h-128zm0-384h128v128h-128zm0 1536h128v128h-128z"></svg:path>`,
})
export class FluentMdl2BorderDotIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
