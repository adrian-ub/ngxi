import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsPipelineIcon],svg[eos-icons-pipeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9v1H5V4h1V2H1v2h1v7a2 2 0 0 0 2 2h5v1h2V9Zm13 11v-8a2 2 0 0 0-2-2h-5V9h-2v5h2v-1h4v7h-1v2h5v-2Z"></svg:path>`,
})
export class EosIconsPipelineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
