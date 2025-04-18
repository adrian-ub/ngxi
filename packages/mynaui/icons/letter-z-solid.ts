import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterZSolidIcon],svg[mynaui-letter-z-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a1 1 0 1 0 0 2h5.5l-6.3 8.4A1 1 0 0 0 8 18h7.5a1 1 0 1 0 0-2H10l6.3-8.4a1 1 0 0 0-.8-1.6z"></svg:path>`,
})
export class MynauiLetterZSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
