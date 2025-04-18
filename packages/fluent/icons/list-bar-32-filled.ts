import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentListBar32FilledIcon],svg[fluent-list-bar-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 28h13.5a2.5 2.5 0 0 0 2.5-2.5v-2a2.5 2.5 0 0 0-2.5-2.5H12zm0-9h13.5a2.5 2.5 0 0 0 2.5-2.5v-1a2.5 2.5 0 0 0-2.5-2.5H12zm-2-6v6H6.5A2.5 2.5 0 0 1 4 16.5v-1A2.5 2.5 0 0 1 6.5 13zm2-2h13.5A2.5 2.5 0 0 0 28 8.5v-2A2.5 2.5 0 0 0 25.5 4H12zm-2-7v7H6.5A2.5 2.5 0 0 1 4 8.5v-2A2.5 2.5 0 0 1 6.5 4zm0 17v7H6.5A2.5 2.5 0 0 1 4 25.5v-2A2.5 2.5 0 0 1 6.5 21z"></svg:path>`,
})
export class FluentListBar32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
