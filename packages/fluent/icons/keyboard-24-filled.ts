import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentKeyboard24FilledIcon],svg[fluent-keyboard-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.745 5a2.25 2.25 0 0 1 2.25 2.25v9.505a2.25 2.25 0 0 1-2.25 2.25H4.25A2.25 2.25 0 0 1 2 16.755V7.25A2.25 2.25 0 0 1 4.25 5zm-2.495 9.5H6.75l-.102.007a.75.75 0 0 0 0 1.486L6.75 16h10.5l.102-.007a.75.75 0 0 0 0-1.486zM16.5 11a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2.995 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m2.995 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class FluentKeyboard24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
