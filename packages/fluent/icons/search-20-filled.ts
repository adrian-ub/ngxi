import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSearch20FilledIcon],svg[fluent-search-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.535 13.596a6.5 6.5 0 1 1 1.06-1.06l3.435 3.434a.75.75 0 0 1-.976 1.133l-.084-.073zM13.5 8.5a5 5 0 1 0-10 0a5 5 0 0 0 10 0"></svg:path>`,
})
export class FluentSearch20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
