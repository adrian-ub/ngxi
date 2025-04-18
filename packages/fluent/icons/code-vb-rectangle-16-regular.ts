import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeVbRectangle16RegularIcon],svg[fluent-code-vb-rectangle-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.727 8.362A1.5 1.5 0 0 0 9.5 6h-1a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1.25a1.5 1.5 0 0 0 .977-2.638M9 7h.5a.5.5 0 1 1 0 1H9zm.75 3H9V9h.75a.5.5 0 0 1 0 1M7.468 6.676l-1.5 4a.5.5 0 0 1-.936 0l-1.5-4a.5.5 0 0 1 .936-.352L5.5 9.076l1.032-2.752a.5.5 0 0 1 .936.352M2.75 3A1.75 1.75 0 0 0 1 4.75v7.5c0 .966.784 1.75 1.75 1.75h9.5A1.75 1.75 0 0 0 14 12.25v-7.5A1.75 1.75 0 0 0 12.25 3zM2 4.75A.75.75 0 0 1 2.75 4h9.5a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75h-9.5a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class FluentCodeVbRectangle16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
