import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronRight48RegularIcon],svg[fluent-chevron-right-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.116 39.634a1.25 1.25 0 0 1 0-1.768L29.982 24L16.116 10.134a1.25 1.25 0 0 1 1.768-1.768l14.75 14.75a1.25 1.25 0 0 1 0 1.768l-14.75 14.75a1.25 1.25 0 0 1-1.768 0"></svg:path>`,
})
export class FluentChevronRight48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
