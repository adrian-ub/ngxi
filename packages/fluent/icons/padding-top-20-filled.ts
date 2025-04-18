import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaddingTop20FilledIcon],svg[fluent-padding-top-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 2.75A.75.75 0 0 1 4.5 2h1.313a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m3.938 0a.75.75 0 0 1 .75-.75h2.624a.75.75 0 0 1 0 1.5H8.439a.75.75 0 0 1-.75-.75m5.25 0a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.312a.75.75 0 0 1-.75-.75M3.75 17.25a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m6.53-12.53a.75.75 0 0 0-1.06 0L4.97 8.97a.75.75 0 1 0 1.06 1.06L9 7.06v7.19a.75.75 0 0 0 1.5 0V7.06l2.97 2.97a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class FluentPaddingTop20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
