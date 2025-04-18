import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AlignCenterIcon],svg[fluent-mdl2-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h2048v128H0zm256 384h1536v128H256zm0 768h1536v128H256zM0 1792v-128h2048v128zm0-768V896h2048v128z"></svg:path>`,
})
export class FluentMdl2AlignCenterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
