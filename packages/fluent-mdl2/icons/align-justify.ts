import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignJustifyIcon],svg[fluent-mdl2-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 128v128H0V128zM0 1664h2048v128H0zm0-768h2048v128H0zm0-384h2048v128H0zm0 768h2048v128H0z"></svg:path>`,
})
export class FluentMdl2AlignJustifyIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
