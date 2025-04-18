import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGavel24FilledIcon],svg[fluent-gavel-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.729 2.712a2.25 2.25 0 0 1 3.41.267l.32.44l-6.473 6.474l-.38-.253a2.25 2.25 0 0 1-.342-3.463zm-1.47 8.03l2.562 1.707q.131.088.216.222l1.234 1.938l6.011-6.012l-2.15-1.563a.8.8 0 0 1-.165-.166l-1.614-2.22zm5.105 5.584l-.268-.42L20.51 9.49l.51.372a2.25 2.25 0 0 1 .268 3.41l-3.436 3.437a2.25 2.25 0 0 1-3.49-.383M9.34 12.299l-6.073 5.958a1.76 1.76 0 1 0 2.476 2.5l6.085-6.085l-.79-1.241zM14.75 19a.75.75 0 1 0 0 1.5h-2a.75.75 0 1 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentGavel24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
