import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsMonitorIcon],svg[lineicons-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 6.422a2.25 2.25 0 0 1 2.25-2.25h15.5A2.25 2.25 0 0 1 22 6.422v7.406a2.25 2.25 0 0 1-2.25 2.25h-7v2.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25v-2.25h-7A2.25 2.25 0 0 1 2 13.828zm2.25-.75a.75.75 0 0 0-.75.75v7.406c0 .414.336.75.75.75h15.5a.75.75 0 0 0 .75-.75V6.422a.75.75 0 0 0-.75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsMonitorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
