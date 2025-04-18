import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BacklogIcon],svg[fluent-mdl2-backlog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 256h512v384H128zm128 256h256V384H256zM128 768h512v384H128zm128 256h256V896H256zm512-768h512v384H768zm128 256h256V384H896zm1024-256v384h-512V256zm-128 128h-256v128h256zM768 768h512v384H768zm128 256h256V896H896zm-768 256h512v384H128zm128 256h256v-128H256z"></svg:path>`,
})
export class FluentMdl2BacklogIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
