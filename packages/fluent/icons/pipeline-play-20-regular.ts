import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPipelinePlay20RegularIcon],svg[fluent-pipeline-play-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5.5a1.5 1.5 0 1 1 3 0V6h10v-.5a1.5 1.5 0 0 1 3 0v4.757a5.5 5.5 0 0 0-1-.657V5.5a.5.5 0 0 0-1 0v3.707a5.5 5.5 0 0 0-1-.185V7H5v6h4.207a5.5 5.5 0 0 0-.185 1H5v.5a1.5 1.5 0 0 1-3 0zm2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0zm15 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874"></svg:path>`,
})
export class FluentPipelinePlay20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
