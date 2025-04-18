import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookUpLeft16FilledIcon],svg[fluent-arrow-hook-up-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 11.25c0 .414.336.75.75.75h3c1.182 0 2.133-.412 2.788-1.087A3.46 3.46 0 0 0 12.5 8.5a3.46 3.46 0 0 0-.962-2.413C10.883 5.412 9.932 5 8.75 5H5.56l.72-.72a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 0 0 1.06-1.06l-.72-.72h3.19c.818 0 1.367.276 1.712.631c.353.365.538.86.538 1.369a1.96 1.96 0 0 1-.538 1.369c-.345.355-.894.631-1.712.631h-3a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class FluentArrowHookUpLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
