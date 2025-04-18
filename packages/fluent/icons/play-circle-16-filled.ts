import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlayCircle16FilledIcon],svg[fluent-play-circle-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m8.5 0a.5.5 0 0 0-.254-.435L7.62 6.077a.75.75 0 0 0-1.12.652v2.542a.75.75 0 0 0 1.12.653l2.626-1.489A.5.5 0 0 0 10.5 8"></svg:path>`,
})
export class FluentPlayCircle16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
