import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBlock20RegularIcon],svg[fluent-block-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16zm0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14zM6.5 9.5h7a.5.5 0 0 1 .09.992l-.09.008h-7a.5.5 0 0 1-.09-.992L6.5 9.5h7h-7z" fill="currentColor"></svg:path></svg:g>`,
})
export class FluentBlock20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
