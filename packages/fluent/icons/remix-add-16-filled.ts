import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRemixAdd16FilledIcon],svg[fluent-remix-add-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a7 7 0 0 1 5.363 11.5h-2.198A5.503 5.503 0 0 0 8 2.5H1.75a.75.75 0 0 1 0-1.5zm0 14A7 7 0 0 1 2.637 3.5h2.199A5.503 5.503 0 0 0 8 13.5h6.25a.75.75 0 0 1 0 1.5zm.75-9.251a.75.75 0 0 0-1.5 0v1.5h-1.5a.75.75 0 0 0 0 1.5h1.5v1.5a.75.75 0 0 0 1.5 0v-1.5h1.5a.75.75 0 0 0 0-1.5h-1.5z"></svg:path>`,
})
export class FluentRemixAdd16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
