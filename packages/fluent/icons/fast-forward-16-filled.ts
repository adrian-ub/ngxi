import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFastForward16FilledIcon],svg[fluent-fast-forward-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4.465a1 1 0 0 1 1.576-.818l5.012 3.536a1 1 0 0 1 0 1.634l-5.012 3.536A1 1 0 0 1 8 11.536V9.232l-4.424 3.12A1 1 0 0 1 2 11.537V4.465a1 1 0 0 1 1.576-.818L8 6.768z"></svg:path>`,
})
export class FluentFastForward16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
