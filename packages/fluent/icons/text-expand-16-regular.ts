import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextExpand16RegularIcon],svg[fluent-text-expand-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 12a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m7-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M4.5 12a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7M5 6.5a.5.5 0 0 0-1 0V8H2.5a.5.5 0 0 0 0 1H4v1.5a.5.5 0 0 0 1 0V9h1.5a.5.5 0 0 0 0-1H5z"></svg:path>`,
})
export class FluentTextExpand16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
