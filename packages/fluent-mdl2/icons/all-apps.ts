import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AllAppsIcon],svg[fluent-mdl2-all-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1408v-384h384v384zm128-256v128h128v-128zM0 896V512h384v384zm128-256v128h128V640zM0 384V0h384v384zm128-256v128h128V128zm512 640V640h1152v128zm896 384v128H640v-128zM640 128h1408v128H640zM0 1920v-384h384v384zm128-256v128h128v-128zm512 128v-128h1152v128z"></svg:path>`,
})
export class FluentMdl2AllAppsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
