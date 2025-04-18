import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideText48RegularIcon],svg[fluent-slide-text-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25m1.25 5.25a1.25 1.25 0 1 0 0 2.5h17.5a1.25 1.25 0 1 0 0-2.5zm0 6.5a1.25 1.25 0 1 0 0 2.5h13.5a1.25 1.25 0 1 0 0-2.5zM8.75 8A4.75 4.75 0 0 0 4 12.75v22.5A4.75 4.75 0 0 0 8.75 40h30.5A4.75 4.75 0 0 0 44 35.25v-22.5A4.75 4.75 0 0 0 39.25 8zM6.5 12.75a2.25 2.25 0 0 1 2.25-2.25h30.5a2.25 2.25 0 0 1 2.25 2.25v22.5a2.25 2.25 0 0 1-2.25 2.25H8.75a2.25 2.25 0 0 1-2.25-2.25z"></svg:path>`,
})
export class FluentSlideText48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
