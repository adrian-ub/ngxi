import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentXboxConsole24FilledIcon],svg[fluent-xbox-console-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 2a.75.75 0 0 0-.75.75v18.5c0 .414.336.75.75.75H8V11.75a.75.75 0 0 1 1.5 0V22h8.75a.75.75 0 0 0 .75-.75V2.75a.75.75 0 0 0-.75-.75zM9.5 5.75a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class FluentXboxConsole24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
