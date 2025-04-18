import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AllAppsMirroredIcon],svg[fluent-mdl2-all-apps-mirrored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1408v-384h-384v384zm-128-256v128h-128v-128zm128-256V512h-384v384zm-128-256v128h-128V640zm128-256V0h-384v384zm-128-256v128h-128V128zm-512 640V640H256v128zm-896 384v128h896v-128zm896-1024H0v128h1408zm640 1792v-384h-384v384zm-128-256v128h-128v-128zm-512 128v-128H256v128z"></svg:path>`,
})
export class FluentMdl2AllAppsMirroredIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
