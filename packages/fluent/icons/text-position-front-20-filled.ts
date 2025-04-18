import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionFront20FilledIcon],svg[fluent-text-position-front-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3.5a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75M10 6.25a2.25 2.25 0 0 0-2.122 1.5H6.325a3.751 3.751 0 0 1 7.35 0h-1.553A2.25 2.25 0 0 0 10 6.25m-3.75 5h1.5v2.25a.75.75 0 0 1-1.5 0zm7.5 0h-1.5v2.25a.75.75 0 0 0 1.5 0zM3.5 14.75a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5zm0-6a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentTextPositionFront20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
