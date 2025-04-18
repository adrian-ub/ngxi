import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPageFit16RegularIcon],svg[fluent-page-fit-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h1a.5.5 0 0 1 0 1H4v1a.5.5 0 0 1-1 0zm10 0a1 1 0 0 0-1-1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0zm0 4a1 1 0 0 1-1 1h-1a.5.5 0 0 1 0-1h1V9a.5.5 0 0 1 1 0zM3 10a1 1 0 0 0 1 1h1a.5.5 0 0 0 0-1H4V9a.5.5 0 0 0-1 0zm0-7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></svg:path>`,
})
export class FluentPageFit16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
