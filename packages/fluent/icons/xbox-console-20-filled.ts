import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentXboxConsole20FilledIcon],svg[fluent-xbox-console-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5H7V9.5a.5.5 0 0 1 1 0V18h7.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5zm3 4.5a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class FluentXboxConsole20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
