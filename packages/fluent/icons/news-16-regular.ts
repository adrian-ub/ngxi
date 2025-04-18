import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNews16RegularIcon],svg[fluent-news-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM4 9V8h1v1zm3.5-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM1 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2a2 2 0 0 1 2 2v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5zm11.5 6.5a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6.5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5V6a1 1 0 0 0-1-1v5a.5.5 0 0 1-.5.5"></svg:path>`,
})
export class FluentNews16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
