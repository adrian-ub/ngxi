import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentContactCard20FilledIcon],svg[fluent-contact-card-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4A1.5 1.5 0 0 0 2 5.5v9A1.5 1.5 0 0 0 3.5 16h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 16.5 4zm3 6a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1.551.75H8.05a.95.95 0 0 1 .949.949c0 .847-.577 1.585-1.399 1.791l-.059.015c-.684.17-1.4.17-2.084 0l-.06-.015A1.846 1.846 0 0 1 4 11.699a.95.95 0 0 1 .949-.949M11 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m.5 2.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentContactCard20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
