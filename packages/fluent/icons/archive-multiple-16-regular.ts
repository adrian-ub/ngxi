import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArchiveMultiple16RegularIcon],svg[fluent-archive-multiple-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM2 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm1 10V5h8v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1M2 2h10v2H2zm12 4.5a1.5 1.5 0 0 0-1-1.415V12a2 2 0 0 1-2 2H4.268A2 2 0 0 0 6 15h5a3 3 0 0 0 3-3z"></svg:path>`,
})
export class FluentArchiveMultiple16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
