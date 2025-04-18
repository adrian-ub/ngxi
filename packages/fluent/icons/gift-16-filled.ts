import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGift16FilledIcon],svg[fluent-gift-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5H7v3H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.268A2 2 0 0 1 7.5 2.677A2 2 0 0 1 10.732 5H12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H8zM5 4a1 1 0 0 0 1 1h1V4a1 1 0 0 0-2 0m3 1h1a1 1 0 1 0-1-1zm4 4H8v5h2a2 2 0 0 0 2-2zm-5 5V9H3v3a2 2 0 0 0 2 2z"></svg:path>`,
})
export class FluentGift16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
