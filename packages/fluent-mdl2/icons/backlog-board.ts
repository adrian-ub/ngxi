import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BacklogBoardIcon],svg[fluent-mdl2-backlog-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 384h512v384H256zm128 256h256V512H384zM256 896h512v384H256zm128 256h256v-128H384zm512-768h512v384H896zm128 256h256V512h-256zm512-256h512v384h-512zm128 256h256V512h-256zM896 896h512v384H896zm128 256h256v-128h-256zm512-256h512v384h-512zm128 256h256v-128h-256zM256 1408h512v384H256zm128 256h256v-128H384zm1152-256h512v384h-512zm128 256h256v-128h-256zm384-1536v128H128v1664H0V128z"></svg:path>`,
})
export class FluentMdl2BacklogBoardIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
