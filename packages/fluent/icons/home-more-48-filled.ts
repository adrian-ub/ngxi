import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHomeMore48FilledIcon],svg[fluent-home-more-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.606 5.855a3.78 3.78 0 0 1 4.788 0l13.175 10.742A3.91 3.91 0 0 1 41 19.628v19.485C41 41.26 39.288 43 37.175 43h-26.35C8.713 43 7 41.26 7 39.113V19.628a3.91 3.91 0 0 1 1.431-3.031zM19.25 24.5a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0m7 0a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0m7 0a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0m-7 7a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0m-7 0a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0m14 0a2.25 2.25 0 1 0-4.5 0a2.25 2.25 0 0 0 4.5 0"></svg:path>`,
})
export class FluentHomeMore48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
