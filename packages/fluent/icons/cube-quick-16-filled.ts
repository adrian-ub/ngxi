import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCubeQuick16FilledIcon],svg[fluent-cube-quick-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.93 4.138a1.25 1.25 0 0 1 1.14 0l2.25 1.155c.418.214.68.643.68 1.112v3.189c0 .469-.262.898-.68 1.112l-2.25 1.155a1.25 1.25 0 0 1-1.14 0l-2.25-1.155A1.25 1.25 0 0 1 7 9.594v-3.19c0-.468.262-.897.68-1.111zM8.552 6.775a.5.5 0 0 0 .223.671L10 8.058v1.441a.5.5 0 0 0 1 0V8.058l1.224-.612a.5.5 0 1 0-.448-.894L10.5 7.19l-1.276-.638a.5.5 0 0 0-.671.223M1.5 7.5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1zm.5-2a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h3a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentCubeQuick16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
