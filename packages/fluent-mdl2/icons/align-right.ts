import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignRightIcon],svg[fluent-mdl2-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v128H0zm0 1664v-128h2048v128zm0-768V896h2048v128zm512-384V512h1536v128zm0 768v-128h1536v128z"></svg:path>`,
})
export class FluentMdl2AlignRightIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
