import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDualScreenVerticalScroll20FilledIcon],svg[fluent-dual-screen-vertical-scroll-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 16H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-5.5zm-1-12H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.5zm7.354 7.146a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647l1.646-1.647a.5.5 0 0 1 .708 0m0-3a.5.5 0 0 1-.708.708L14.5 7.207l-1.646 1.647a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0z"></svg:path>`,
})
export class FluentDualScreenVerticalScroll20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
