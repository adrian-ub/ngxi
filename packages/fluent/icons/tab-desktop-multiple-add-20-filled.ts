import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTabDesktopMultipleAdd20FilledIcon],svg[fluent-tab-desktop-multiple-add-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.5A2.5 2.5 0 0 1 4.5 2H6v2.5A1.5 1.5 0 0 0 7.5 6H15v6.5a2.5 2.5 0 0 1-2.5 2.5h-1.522q.021-.248.022-.5a5.5 5.5 0 0 0-9-4.243zM10.793 16a5.5 5.5 0 0 1-1.05 2H14a4 4 0 0 0 4-4V7.5a2.5 2.5 0 0 0-2-2.45v7.45a3.5 3.5 0 0 1-3.5 3.5zM7 4.5V2h5.5A2.5 2.5 0 0 1 15 4.5V5H7.5a.5.5 0 0 1-.5-.5m3 10a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H6z"></svg:path>`,
})
export class FluentTabDesktopMultipleAdd20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
