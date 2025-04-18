import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataBarVerticalStar24FilledIcon],svg[fluent-data-bar-vertical-star-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.251 3a2.25 2.25 0 0 0-2.249 2.25v5.924a6.52 6.52 0 0 1 4.498.558V5.25A2.25 2.25 0 0 0 18.251 3m-4.25 6.25v2.772A6.5 6.5 0 0 0 11 17.5a6.47 6.47 0 0 0 1.012 3.485q-.128.015-.261.015a2.25 2.25 0 0 1-2.249-2.25v-9.5a2.25 2.25 0 1 1 4.498 0m-10.999 4a2.25 2.25 0 1 1 4.498 0v5.5a2.25 2.25 0 1 1-4.498 0zM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-4.945-3.08a.577.577 0 0 0-1.11 0l-.557 1.788h-1.803c-.566 0-.8.754-.343 1.1l1.458 1.105l-.557 1.787c-.175.561.441 1.028.899.681l1.458-1.104l1.458 1.104c.458.347 1.074-.12.899-.68l-.557-1.788l1.458-1.104c.458-.347.223-1.101-.343-1.101h-1.803z"></svg:path>`,
})
export class FluentDataBarVerticalStar24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
