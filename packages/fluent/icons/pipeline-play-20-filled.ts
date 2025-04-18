import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPipelinePlay20FilledIcon],svg[fluent-pipeline-play-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5a1.5 1.5 0 0 1 3 0v9a1.5 1.5 0 0 1-3-.001zm12 3.522A5.5 5.5 0 0 0 9.022 14H6V6h8zM15 5.5v3.522a5.5 5.5 0 0 1 3 1.235V5.5a1.5 1.5 0 0 0-3 0m4 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874"></svg:path>`,
})
export class FluentPipelinePlay20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
