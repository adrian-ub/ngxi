import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGuest20FilledIcon],svg[fluent-guest-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.5A1.5 1.5 0 0 0 14.5 2h-9A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5zm-8 1a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M10 7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-2.25 5h4.5c.665 0 1.298.55 1.218 1.302c-.06.56-.235 1.254-.784 1.806c-.557.558-1.418.892-2.684.892s-2.127-.334-2.684-.892c-.55-.552-.724-1.247-.784-1.806C6.452 12.55 7.086 12 7.75 12"></svg:path>`,
})
export class FluentGuest20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
