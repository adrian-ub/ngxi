import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TableComputedIcon],svg[fluent-mdl2-table-computed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1062 1280H640v256h293l-65 128H0V128h1664v512h-128V512h-384v256h168l-65 128h-103v205zm-38-128V896H640v256zm0-384V512H640v256zm-512 768v-256H128v256zm0-384V896H128v256zm0-384V512H128v256zM128 384h1408V256H128zm1651 768h269l-672 896h-264l256-512h-256l387-768h518zm-444 738l457-610h-243l238-384h-209l-258 512h256z"></svg:path>`,
})
export class FluentMdl2TableComputedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
