import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLinkMultiple24FilledIcon],svg[fluent-link-multiple-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 4a5.5 5.5 0 0 0-1.99 10.63c.04-.7.19-1.37.433-1.994A3.5 3.5 0 0 1 6.5 6h6a3.5 3.5 0 1 1 0 7H12a1 1 0 1 0 0 2h.5a5.5 5.5 0 1 0 0-11zm12.613 8.213A3.001 3.001 0 0 1 18 18h-7a3 3 0 1 1 0-6h1a1 1 0 0 0 0-2h-1a5 5 0 0 0 0 10h7a5 5 0 0 0 1.496-9.772a6.5 6.5 0 0 1-.383 1.985"></svg:path>`,
})
export class FluentLinkMultiple24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
