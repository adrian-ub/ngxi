import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterCSolidIcon],svg[mynaui-letter-c-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 6A3.5 3.5 0 0 0 7 9.5v5a3.5 3.5 0 0 0 3.5 3.5h2.813a3.19 3.19 0 0 0 3.187-3.187V14.5a1 1 0 1 0-2 0v.313c0 .655-.532 1.187-1.187 1.187H10.5A1.5 1.5 0 0 1 9 14.5v-5A1.5 1.5 0 0 1 10.5 8h2.813c.655 0 1.187.532 1.187 1.188V9.5a1 1 0 1 0 2 0v-.312A3.19 3.19 0 0 0 13.313 6z"></svg:path>`,
})
export class MynauiLetterCSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
