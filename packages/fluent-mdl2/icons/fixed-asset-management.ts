import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FixedAssetManagementIcon],svg[fluent-mdl2-fixed-asset-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1280h256v768H1024v-768h256v-256h512zm-384-128v128h256v-128zm512 768v-256h-128v128h-128v-128h-256v128h-128v-128h-128v256zm0-384v-128h-768v128zm-768-512v128H896v256H640v-128h128v-128H512v256H0V640h128V128h1536v768h-128V256H256v384h256v384zm-768 256V768H128v512z"></svg:path>`,
})
export class FluentMdl2FixedAssetManagementIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
