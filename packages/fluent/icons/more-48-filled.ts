import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMore48FilledIcon],svg[fluent-more-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M16.668 24a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0z" fill="currentColor"></svg:path><svg:path d="M28.168 24a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0z" fill="currentColor"></svg:path><svg:path d="M36.168 27.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMore48FilledIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
