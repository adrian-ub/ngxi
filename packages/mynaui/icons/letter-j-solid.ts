import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterJSolidIcon],svg[mynaui-letter-j-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 6a1 1 0 0 0-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5H11.5a1.5 1.5 0 0 1-1.5-1.5a1 1 0 1 0-2 0a3.5 3.5 0 0 0 3.5 3.5h1.25a3.5 3.5 0 0 0 3.5-3.5V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterJSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
