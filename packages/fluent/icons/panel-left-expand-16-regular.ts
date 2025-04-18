import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPanelLeftExpand16RegularIcon],svg[fluent-panel-left-expand-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.647 9.147l.646-.647H8.502a.5.5 0 0 1 0-1h1.791l-.646-.646a.5.5 0 1 1 .707-.707l1.5 1.5a.5.5 0 0 1 0 .707l-1.5 1.5a.5.5 0 1 1-.707-.707"></svg:path><svg:path d="M2 4.999a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6.002a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v6.002a1 1 0 0 0 1 1h2.002V4zm3.002 0v8.002H12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class FluentPanelLeftExpand16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
