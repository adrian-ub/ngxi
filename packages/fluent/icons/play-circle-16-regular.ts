import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlayCircle16RegularIcon],svg[fluent-play-circle-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 8a.5.5 0 0 1-.254.435L7.62 9.924A.75.75 0 0 1 6.5 9.27V6.729a.75.75 0 0 1 1.12-.652l2.626 1.488A.5.5 0 0 1 10.5 8M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8"></svg:path>`,
})
export class FluentPlayCircle16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
