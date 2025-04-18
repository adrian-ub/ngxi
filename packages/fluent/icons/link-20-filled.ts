import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLink20FilledIcon],svg[fluent-link-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a4 4 0 0 1 .2 7.995L14 14h-2a.75.75 0 0 1-.102-1.493L12 12.5h2a2.5 2.5 0 0 0 .164-4.995L14 7.5h-2a.75.75 0 0 1-.102-1.493L12 6zM8 6a.75.75 0 0 1 .102 1.493L8 7.5H6a2.5 2.5 0 0 0-.164 4.995L6 12.5h2a.75.75 0 0 1 .102 1.493L8 14H6a4 4 0 0 1-.2-7.995L6 6zM6.25 9.25h7.5a.75.75 0 0 1 .102 1.493l-.102.007h-7.5a.75.75 0 0 1-.102-1.493zh7.5z"></svg:path>`,
})
export class FluentLink20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
