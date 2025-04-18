import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBot48FilledIcon],svg[fluent-bot-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.25 5.25a1.25 1.25 0 1 0-2.5 0V7h-7.5A4.25 4.25 0 0 0 11 11.25v8.5A4.25 4.25 0 0 0 15.25 24h17.5A4.25 4.25 0 0 0 37 19.75v-8.5A4.25 4.25 0 0 0 32.75 7h-7.5zM19 18a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m12.5-2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M8 32.25A4.25 4.25 0 0 1 12.25 28h23.5A4.25 4.25 0 0 1 40 32.25v1.05c0 3.154-1.535 5.888-4.336 7.785C32.9 42.957 28.94 44 24 44s-8.9-1.043-11.664-2.915C9.535 39.188 8 36.454 8 33.3z"></svg:path>`,
})
export class FluentBot48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
