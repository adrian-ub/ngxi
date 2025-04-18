import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlowchart32FilledIcon],svg[fluent-flowchart-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h1v5.269a2 2 0 0 0-.412.317l-4.002 4.002a2 2 0 0 0 0 2.828l4.002 4.003a2 2 0 0 0 2.828 0l4.003-4.003q.19-.191.32-.416h5.26v1a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v1h-5.263a2 2 0 0 0-.317-.412l-4.003-4.002a2 2 0 0 0-.416-.32V13h1a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z"></svg:path>`,
})
export class FluentFlowchart32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
