import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BlobStorageIcon],svg[fluent-mdl2-blob-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2048v2048H0zm1920 1920V512H128v1408zm0-1536V128H128v256zM768 1280v512H256v-512zm-128 384v-256H384v256zM1792 640v512h-512V640zm-128 384V768h-256v256zm-768 768v-512h896v512zm128-384v256h640v-256zm128-768v512H256V640zm-128 384V768H384v256z"></svg:path>`,
})
export class FluentMdl2BlobStorageIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
