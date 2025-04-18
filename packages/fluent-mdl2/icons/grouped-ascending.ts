import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GroupedAscendingIcon],svg[fluent-mdl2-grouped-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 128h1536v128H384zm128 603v1061h1408v128H384V731L91 1024L0 933l448-447l448 447l-91 91zm512 677v-128h896v128zm0-384V896h896v128zm0-384V512h896v128z"></svg:path>`,
})
export class FluentMdl2GroupedAscendingIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
