import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextPositionFront24RegularIcon],svg[fluent-text-position-front-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 4a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zM12 8.5A2.5 2.5 0 0 0 9.708 10H8.126a4.002 4.002 0 0 1 7.748 0h-1.582A2.5 2.5 0 0 0 12 8.5m-4 5h1.5v2.25a.75.75 0 0 1-1.5 0zm8 0h-1.5v2.25a.75.75 0 0 0 1.5 0zm4.25-2.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1 0-1.5zM3 18.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentTextPositionFront24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
