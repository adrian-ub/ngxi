import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChat48FilledIcon],svg[fluent-chat-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24C4 12.954 12.954 4 24 4s20 8.954 20 20s-8.954 20-20 20c-3.45 0-6.698-.874-9.533-2.414L6.23 43.928c-1.319.375-2.537-.844-2.162-2.162l2.342-8.238A19.9 19.9 0 0 1 4 24m12-3.75c0 .69.56 1.25 1.25 1.25h13.5a1.25 1.25 0 1 0 0-2.5h-13.5c-.69 0-1.25.56-1.25 1.25m1.25 6.25a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentChat48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
