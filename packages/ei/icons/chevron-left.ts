import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiChevronLeftIcon],svg[ei-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.3 34.7L17.6 25l9.7-9.7l1.4 1.4l-8.3 8.3l8.3 8.3z"></svg:path>`,
})
export class EiChevronLeftIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
