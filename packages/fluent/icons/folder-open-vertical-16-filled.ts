import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderOpenVertical16FilledIcon],svg[fluent-folder-open-vertical-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 1H6.533l1.717.991A3.5 3.5 0 0 1 10 5.022v7.928a2.5 2.5 0 0 0 2-2.45V7.207l1.56-1.56A1.5 1.5 0 0 0 14 4.585V3.5A2.5 2.5 0 0 0 11.5 1M9 5.022v7.973c0 1.54-1.667 2.502-3 1.732l-2.745-1.585a2.5 2.5 0 0 1-1.25-2.165V3.004c0-1.54 1.667-2.502 3-1.732L7.75 2.857A2.5 2.5 0 0 1 9 5.022"></svg:path>`,
})
export class FluentFolderOpenVertical16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
