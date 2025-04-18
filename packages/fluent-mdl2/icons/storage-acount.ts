import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2StorageAcountIcon],svg[fluent-mdl2-storage-acount-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2048v2048H0zm1920 1920V512H128v1408zm0-1536V128H128v256zm-128 256v512H256V640zm-128 384V768H384v256zm128 256v512H256v-512zm-128 384v-256H384v256z"></svg:path>`,
})
export class FluentMdl2StorageAcountIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
