import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2BacklogListIcon],svg[fluent-mdl2-backlog-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 128h1792v512H128zm1664 384V256H256v256zM512 1280V768h1408v512zm128-384v256h1152V896zM128 1920v-512h1792v512zm128-384v256h1536v-256z"></svg:path>`,
})
export class FluentMdl2BacklogListIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
