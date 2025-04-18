import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PageListFilterIcon],svg[fluent-mdl2-page-list-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 1280h896v152l-256 288v328h-384v-328l-256-288zm512 392l234-264h-596l234 264v248h128zM1280 384v128H512V384zm-768 896v-128h512v128zm-384 384h1059l93 105v23H0V0h1536v1152h-128V128H128zm1152-896v128H512V768zM384 384v128H256V384zm0 384v128H256V768zm-128 512v-128h128v128z"></svg:path>`,
})
export class FluentMdl2PageListFilterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
