import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailAllRead28FilledIcon],svg[fluent-mail-all-read-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.348 2.685a.75.75 0 0 0-.696 0L4.199 7.117c-.387.203-.698.51-.906.876L13 13.15l9.707-5.157a2.24 2.24 0 0 0-.906-.876zM3 17.75V9.536l9.648 5.126a.75.75 0 0 0 .704 0L23 9.536v8.214A3.25 3.25 0 0 1 19.75 21H6.25A3.25 3.25 0 0 1 3 17.75M6.012 22a3.25 3.25 0 0 0 2.739 1.5h11.5c2.9 0 5.25-2.35 5.25-5.25v-7.5a3.25 3.25 0 0 0-1.5-2.74v10.24A3.75 3.75 0 0 1 20.25 22z"></svg:path>`,
})
export class FluentMailAllRead28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
