import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMore48RegularIcon],svg[fluent-more-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M15.752 24a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0z" fill="currentColor"></svg:path><svg:path d="M27.252 24a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0z" fill="currentColor"></svg:path><svg:path d="M35.502 27.25a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentMore48RegularIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}
