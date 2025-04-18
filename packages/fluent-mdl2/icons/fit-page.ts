import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FitPageIcon],svg[fluent-mdl2-fit-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 896V640h-256V512h384v384zM384 640v256H256V512h384v128zm1408 512v384h-384v-128h256v-256zM640 1408v128H256v-384h128v256zM0 256h2048v1536H0zm1920 1408V384H128v1280z"></svg:path>`,
})
export class FluentMdl2FitPageIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
