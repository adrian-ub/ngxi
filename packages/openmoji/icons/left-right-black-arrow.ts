import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLeftRightBlackArrowIcon],svg[openmoji-left-right-black-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f3f3f" d="m48.341 19.828l-3.7 4.1l9.2 8.6H17.54l9.2-8.6l-3.7-4.1l-16.7 15.8l16.7 15.8l3.7-4.1l-9.2-8.6h36.301l-9.2 8.6l3.7 4.1l16.7-15.8z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m48.341 19.828l-3.7 4.1l9.2 8.6H17.54l9.2-8.6l-3.7-4.1l-16.7 15.8l16.7 15.8l3.7-4.1l-9.2-8.6h36.301l-9.2 8.6l3.7 4.1l16.7-15.8z"></svg:path>`,
})
export class OpenmojiLeftRightBlackArrowIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
