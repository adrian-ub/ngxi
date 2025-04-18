import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChannel28FilledIcon],svg[fluent-channel-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.168a1.75 1.75 0 1 0 1.5 3.163A1.75 1.75 0 0 0 3 7.168m.168-1.106A2.75 2.75 0 1 1 3 11.397v9.353A4.25 4.25 0 0 0 7.25 25h13.5A4.25 4.25 0 0 0 25 20.75V7.25A4.25 4.25 0 0 0 20.75 3H7.25a4.25 4.25 0 0 0-4.082 3.062M9.75 11h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1 0-1.5M9 15.75a.75.75 0 0 1 .75-.75h5.75a.75.75 0 0 1 0 1.5H9.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentChannel28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
