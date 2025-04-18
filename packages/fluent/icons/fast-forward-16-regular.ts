import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFastForward16RegularIcon],svg[fluent-fast-forward-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.465a1 1 0 0 1 1.576-.818L8 6.768V4.465a1 1 0 0 1 1.576-.818l5.012 3.536a1 1 0 0 1 0 1.634l-5.012 3.536A1 1 0 0 1 8 11.536V9.232l-4.424 3.12A1 1 0 0 1 2 11.537zm6 3.527L3 4.465v7.07l5-3.527zm1 3.544L14.012 8L9 4.465z"></svg:path>`,
})
export class FluentFastForward16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
