import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce48RegularIcon],svg[fluent-arrow-bounce-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 14.25c0-.69.56-1.25 1.25-1.25h15.5a1.25 1.25 0 1 1 0 2.5H8.295l16.706 16.494L41.872 15.36a1.25 1.25 0 1 1 1.756 1.78l-17.75 17.5a1.25 1.25 0 0 1-1.756 0L6.5 17.24v12.577a1.25 1.25 0 1 1-2.5 0z"></svg:path>`,
})
export class FluentArrowBounce48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
