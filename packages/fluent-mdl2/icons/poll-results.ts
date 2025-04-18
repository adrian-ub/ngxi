import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PollResultsIcon],svg[fluent-mdl2-poll-results-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 640v640h-768v512H128v128H0V0h128v128h1408v512zM128 256v384h1280V256zm1024 1408v-384H128v384zm768-512V768H128v384z"></svg:path>`,
})
export class FluentMdl2PollResultsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
