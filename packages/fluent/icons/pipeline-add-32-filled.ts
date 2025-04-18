import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPipelineAdd32FilledIcon],svg[fluent-pipeline-add-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a2 2 0 0 0-2 2v16a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2m24 0a2 2 0 0 0-2 2v6.512a9 9 0 0 1 4 2.83V8a2 2 0 0 0-2-2m-5 8q.508 0 1 .055V9H8v14h6a9 9 0 0 1 9-9m0 16.5a7.5 7.5 0 1 0 0-15a7.5 7.5 0 0 0 0 15m1-12.25V22h3.75a.75.75 0 0 1 0 1.5H24v3.75a.75.75 0 0 1-1.5 0V23.5h-3.75a.75.75 0 0 1 0-1.5h3.75v-3.75a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentPipelineAdd32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
