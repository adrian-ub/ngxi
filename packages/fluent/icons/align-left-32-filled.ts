import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignLeft32FilledIcon],svg[fluent-align-left-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4a1 1 0 0 1 2 0v24a1 1 0 1 1-2 0zm7.5 1A3.5 3.5 0 0 0 7 8.5v3a3.5 3.5 0 0 0 3.5 3.5h15a3.5 3.5 0 0 0 3.5-3.5v-3A3.5 3.5 0 0 0 25.5 5zm0 12A3.5 3.5 0 0 0 7 20.5v3a3.5 3.5 0 0 0 3.5 3.5h9a3.5 3.5 0 0 0 3.5-3.5v-3a3.5 3.5 0 0 0-3.5-3.5z"></svg:path>`,
})
export class FluentAlignLeft32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
