import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNotebook32FilledIcon],svg[fluent-notebook-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.25 2A3.25 3.25 0 0 0 4 5.25v21.5A3.25 3.25 0 0 0 7.25 30h16.5A3.25 3.25 0 0 0 27 26.75V5.25A3.25 3.25 0 0 0 23.75 2zM10 7h11a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m18 1h1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H28zm1.25 6H28v4h1.25a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75M28 20h1.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-.75.75H28z"></svg:path>`,
})
export class FluentNotebook32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
