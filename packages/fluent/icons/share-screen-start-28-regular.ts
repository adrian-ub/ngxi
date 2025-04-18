import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShareScreenStart28RegularIcon],svg[fluent-share-screen-start-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.249a2.25 2.25 0 0 1 2.25-2.25h19.5A2.25 2.25 0 0 1 26 7.249v13.5A2.25 2.25 0 0 1 23.75 23H4.25A2.25 2.25 0 0 1 2 20.75zm2.25-.75a.75.75 0 0 0-.75.75v13.5c0 .415.336.75.75.75h19.5a.75.75 0 0 0 .75-.75V7.25a.75.75 0 0 0-.75-.75zm9.748 2.122a.75.75 0 0 1 .53.22l3.255 3.254a.75.75 0 0 1-1.061 1.06l-1.974-1.974v7.447a.75.75 0 1 1-1.5 0v-7.445l-1.97 1.972a.75.75 0 1 1-1.061-1.06l3.25-3.254a.75.75 0 0 1 .53-.22"></svg:path>`,
})
export class FluentShareScreenStart28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
