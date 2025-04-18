import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DownloadDocumentIcon],svg[fluent-mdl2-download-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1920h1024v128H128V0h1115l549 549v347h-128V640h-512V128H256zM1280 512h293l-293-293zm512 1061l163-162l90 90l-317 317l-317-317l90-90l163 162v-549h128zm256 347v128h-640v-128z"></svg:path>`,
})
export class FluentMdl2DownloadDocumentIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
