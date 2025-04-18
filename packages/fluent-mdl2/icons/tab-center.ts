import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2TabCenterIcon],svg[fluent-mdl2-tab-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 640v1280H512v-512H128V128h1408v512zm-128 1152v-768H640v768zM512 1280V640h896V512H256v768zM256 256v128h1152V256zm1536 512H640v128h1152z"></svg:path>`,
})
export class FluentMdl2TabCenterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
