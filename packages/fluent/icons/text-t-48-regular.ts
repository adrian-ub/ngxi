import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextT48RegularIcon],svg[fluent-text-t-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9.25c0-.69.56-1.25 1.25-1.25h25.5c.69 0 1.25.56 1.25 1.25V14a1.25 1.25 0 1 1-2.5 0v-3.5H25.25v27h3.5a1.25 1.25 0 1 1 0 2.5h-9.5a1.25 1.25 0 1 1 0-2.5h3.5v-27H12.5V14a1.25 1.25 0 1 1-2.5 0z"></svg:path>`,
})
export class FluentTextT48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
