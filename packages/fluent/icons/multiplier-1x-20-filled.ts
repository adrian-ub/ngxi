import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMultiplier1x20FilledIcon],svg[fluent-multiplier-1x-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.75a.75.75 0 0 0-1.385-.398l-.048.076c-.214.341-.36.574-.575.811c-.225.247-.547.52-1.128.868a.75.75 0 1 0 .772 1.286c.34-.204.623-.397.864-.588v4.445a.75.75 0 0 0 1.5 0zm2.78 3.47a.75.75 0 1 0-1.06 1.06l.72.72l-.72.72a.75.75 0 1 0 1.06 1.06l.72-.72l.72.72a.75.75 0 1 0 1.06-1.06l-.72-.72l.72-.72a.75.75 0 0 0-1.06-1.06l-.72.72z"></svg:path>`,
})
export class FluentMultiplier1x20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
