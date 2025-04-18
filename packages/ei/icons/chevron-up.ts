import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiChevronUpIcon],svg[ei-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M33.3 28.7L25 20.4l-8.3 8.3l-1.4-1.4l9.7-9.7l9.7 9.7z"></svg:path>`,
})
export class EiChevronUpIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
