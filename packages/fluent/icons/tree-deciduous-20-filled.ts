import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTreeDeciduous20FilledIcon],svg[fluent-tree-deciduous-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a3.5 3.5 0 0 0-3.387 2.613a3.5 3.5 0 0 0-2.563 3.98A3.5 3.5 0 0 0 6 15h2v1.75c0 .69.56 1.25 1.25 1.25h1.5c.69 0 1.25-.56 1.25-1.25V15h2a3.5 3.5 0 0 0 1.95-6.407Q16 8.303 16 8a3.5 3.5 0 0 0-2.613-3.387A3.5 3.5 0 0 0 10 2M9 15h2v1.75a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25z"></svg:path>`,
})
export class FluentTreeDeciduous20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
