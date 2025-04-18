import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterUSolidIcon],svg[mynaui-letter-u-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a1 1 0 0 0-1 1v7.5a3.5 3.5 0 0 0 3.5 3.5H13a3.5 3.5 0 0 0 3.5-3.5V7a1 1 0 1 0-2 0v7.5A1.5 1.5 0 0 1 13 16h-2.5A1.5 1.5 0 0 1 9 14.5V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterUSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
