import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMemory16FilledIcon],svg[fluent-memory-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.414 4.586A2 2 0 0 0 13 4V2.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5V4h-2V2.5a.5.5 0 1 0-1 0V4H7V2.5a.5.5 0 1 0-1 0V4H4V2.5a.5.5 0 1 0-1 0V4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v1.5a.5.5 0 1 0 1 0V12h2v1.5a.5.5 0 1 0 1 0V12h2v1.5a.5.5 0 1 0 1 0V12h2v1.5a.5.5 0 1 0 1 0V12a2 2 0 0 0 2-2V6a2 2 0 0 0-.586-1.414M13 9.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5zM4 9h8V7H4z"></svg:path>`,
})
export class FluentMemory16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
