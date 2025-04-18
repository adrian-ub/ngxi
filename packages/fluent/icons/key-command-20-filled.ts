import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyCommand20FilledIcon],svg[fluent-key-command-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 4.5C6.44 4.5 7 5.06 7 5.75V7H5.75a1.25 1.25 0 1 1 0-2.5M8.5 7V5.75A2.75 2.75 0 1 0 5.75 8.5H7v3H5.75a2.75 2.75 0 1 0 2.75 2.75V13h3v1.25a2.75 2.75 0 1 0 2.75-2.75H13v-3h1.25a2.75 2.75 0 1 0-2.75-2.75V7zm0 1.5h3v3h-3zM13 7V5.75A1.25 1.25 0 1 1 14.25 7zm0 6h1.25A1.25 1.25 0 1 1 13 14.25zm-6 0v1.25A1.25 1.25 0 1 1 5.75 13z"></svg:path>`,
})
export class FluentKeyCommand20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
