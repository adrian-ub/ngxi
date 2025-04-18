import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScales20FilledIcon],svg[fluent-scales-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3a.5.5 0 1 0 0 1h.75L2.077 9.215a1 1 0 0 0-.075.405a3 3 0 0 0 5.996 0a1 1 0 0 0-.075-.405L5.75 4H9.5v11h-4a1.5 1.5 0 0 0 0 3h9a1.5 1.5 0 0 0 0-3h-4V4h3.75l-2.173 5.215a1 1 0 0 0-.075.405a3 3 0 0 0 5.996 0a1 1 0 0 0-.075-.405L15.75 4h.75a.5.5 0 0 0 0-1zM5 4.8L6.75 9h-3.5zM16.75 9h-3.5L15 4.8z"></svg:path>`,
})
export class FluentScales20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
