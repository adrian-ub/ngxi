import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignTop28RegularIcon],svg[fluent-align-top-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3a.75.75 0 0 0 0 1.5h22.5a.75.75 0 0 0 0-1.5zM5 8.75A2.75 2.75 0 0 1 7.75 6h2.5A2.75 2.75 0 0 1 13 8.75v13.5A2.75 2.75 0 0 1 10.25 25h-2.5A2.75 2.75 0 0 1 5 22.25zM7.75 7.5c-.69 0-1.25.56-1.25 1.25v13.5c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25V8.75c0-.69-.56-1.25-1.25-1.25zM15 8.75A2.75 2.75 0 0 1 17.75 6h2.5A2.75 2.75 0 0 1 23 8.75v8a2.75 2.75 0 0 1-2.75 2.75h-2.5A2.75 2.75 0 0 1 15 16.75zm2.75-1.25c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h2.5c.69 0 1.25-.56 1.25-1.25v-8c0-.69-.56-1.25-1.25-1.25z"></svg:path>`,
})
export class FluentAlignTop28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
