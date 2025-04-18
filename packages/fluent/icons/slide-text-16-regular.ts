import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideText16RegularIcon],svg[fluent-slide-text-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM4 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M4.5 9a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM3 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM2 5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentSlideText16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
