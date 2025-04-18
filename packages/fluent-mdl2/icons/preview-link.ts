import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PreviewLinkIcon],svg[fluent-mdl2-preview-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256h2048v1536H0zm1920 1408V384H128v1280zM1792 512v384H256V512zm-128 256V640H384v128zm-384 768v-512h512v512zm128-384v256h256v-256zm-384-128v128H256v-128zm0 384v128H256v-128z"></svg:path>`,
})
export class FluentMdl2PreviewLinkIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
