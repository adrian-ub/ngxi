import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2GridViewSmallIcon],svg[fluent-mdl2-grid-view-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 128v1664H128V128zm-128 128h-384v384h384zm-512 896V768H768v384zm-384 128v384h384v-384zM640 768H256v384h384zm512-128V256H768v384zm128 512h384V768h-384zM256 256v384h384V256zm0 1408h384v-384H256zm1408 0v-384h-384v384z"></svg:path>`,
})
export class FluentMdl2GridViewSmallIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
