import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExit48RegularIcon],svg[fluent-arrow-exit-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 6A6.25 6.25 0 0 0 6 12.25v23.5A6.25 6.25 0 0 0 12.25 42h18.5a1.25 1.25 0 1 0 0-2.5h-18.5a3.75 3.75 0 0 1-3.75-3.75v-23.5a3.75 3.75 0 0 1 3.75-3.75h18.5a1.25 1.25 0 1 0 0-2.5zm22.634 8.366a1.25 1.25 0 0 0-1.768 1.768l6.616 6.616H17.25a1.25 1.25 0 1 0 0 2.5h22.482l-6.616 6.616a1.25 1.25 0 0 0 1.768 1.768l8.75-8.75a1.25 1.25 0 0 0 0-1.768z"></svg:path>`,
})
export class FluentArrowExit48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
