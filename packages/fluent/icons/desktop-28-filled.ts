import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDesktop28FilledIcon],svg[fluent-desktop-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.749 3a2.25 2.25 0 0 1 2.25 2.25v13.502a2.25 2.25 0 0 1-2.25 2.25h-5.751V23.5h1.752a.75.75 0 0 1 .743.649l.007.101a.75.75 0 0 1-.648.744L19.75 25H8.25a.75.75 0 0 1-.102-1.493l.102-.007H10v-2.498H4.25A2.25 2.25 0 0 1 2 18.752V5.25A2.25 2.25 0 0 1 4.25 3zm-7.251 18.002H11.5V23.5h4.999z"></svg:path>`,
})
export class FluentDesktop28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
