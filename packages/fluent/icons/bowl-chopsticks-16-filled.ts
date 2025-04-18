import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBowlChopsticks16FilledIcon],svg[fluent-bowl-chopsticks-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.732 1.078a.5.5 0 0 1 .69.154L7.092 7h1.815L5.578 1.77a.5.5 0 0 1 .844-.537L10.092 7h4.437c.26 0 .471.21.471.47V8c0 .695-.101 1.366-.29 2H1.29A7 7 0 0 1 1 8v-.53c0-.26.21-.47.47-.47h4.437L2.578 1.77a.5.5 0 0 1 .154-.69M8 15a7 7 0 0 1-6.326-4h12.652A7 7 0 0 1 8 15"></svg:path>`,
})
export class FluentBowlChopsticks16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
