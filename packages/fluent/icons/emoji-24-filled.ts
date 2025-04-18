import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmoji24FilledIcon],svg[fluent-emoji-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.998c5.524 0 10.002 4.478 10.002 10.002c0 5.523-4.478 10-10.002 10S1.998 17.523 1.998 12C1.998 6.476 6.476 1.998 12 1.998M8.462 14.783a.75.75 0 0 0-1.179.928A5.99 5.99 0 0 0 12 18.001a5.99 5.99 0 0 0 4.712-2.284a.75.75 0 1 0-1.177-.93A4.49 4.49 0 0 1 12 16.501c-1.398 0-2.69-.64-3.538-1.718M9 8.75a1.25 1.25 0 1 0 0 2.499A1.25 1.25 0 0 0 9 8.75m6 0a1.25 1.25 0 1 0 0 2.499a1.25 1.25 0 0 0 0-2.499"></svg:path>`,
})
export class FluentEmoji24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
