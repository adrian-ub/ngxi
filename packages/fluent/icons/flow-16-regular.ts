import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlow16RegularIcon],svg[fluent-flow-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-2.45 2a2.5 2.5 0 1 0 0-1H9.5a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1h-.55a2.5 2.5 0 1 0 0 1h.55a2 2 0 0 0 2-2V7a1 1 0 0 1 1-1zM5 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentFlow16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
