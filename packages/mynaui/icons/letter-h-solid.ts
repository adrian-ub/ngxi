import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterHSolidIcon],svg[mynaui-letter-h-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-4h4.25v4a1 1 0 1 0 2 0V7a1 1 0 1 0-2 0v4H10V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterHSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
