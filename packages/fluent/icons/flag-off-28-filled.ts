import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagOff28FilledIcon],svg[fluent-flag-off-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.397 1.554l.073-.084a.75.75 0 0 1 .976-.073l.084.073l20 20a.75.75 0 0 1-.976 1.133l-.084-.073L17.938 18H5.5v6.25a.75.75 0 0 1-1.493.102L4 24.25L3.999 4.06l-1.53-1.53a.75.75 0 0 1-.072-.976l.073-.084zM7.06 2.999L23.25 3a.75.75 0 0 1 .683 1.06l-.048.09l-3.999 6.35l3.999 6.35a.75.75 0 0 1-.533 1.143L23.25 18h-1.189z"></svg:path>`,
})
export class FluentFlagOff28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
