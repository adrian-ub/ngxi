import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SourceIcon],svg[fluent-mdl2-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1151 641v127H256V641zm0 512v127H256v-127zm256-768h641v1407H639v-256H0V129h1407zM127 256v129h1153V256zm0 1153h1153V512H127zm1792 256V768h-512v129h385v127h-385v129h385v127h-385v129h385v127H768v129zm0-1024V512h-512v129zm-768 256v127H256V897z"></svg:path>`,
})
export class FluentMdl2SourceIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
