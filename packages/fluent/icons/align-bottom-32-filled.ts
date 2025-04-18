import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignBottom32FilledIcon],svg[fluent-align-bottom-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 29a1 1 0 1 1 0-2h24a1 1 0 1 1 0 2zm1-7.5A3.5 3.5 0 0 0 8.5 25h3a3.5 3.5 0 0 0 3.5-3.5v-15A3.5 3.5 0 0 0 11.5 3h-3A3.5 3.5 0 0 0 5 6.5zm12 0a3.5 3.5 0 0 0 3.5 3.5h3a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 23.5 9h-3a3.5 3.5 0 0 0-3.5 3.5z"></svg:path>`,
})
export class FluentAlignBottom32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
