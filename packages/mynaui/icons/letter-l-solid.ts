import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterLSolidIcon],svg[mynaui-letter-l-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a1 1 0 0 0-1 1v9.5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-6V7a1 1 0 0 0-1-1"></svg:path>`,
})
export class MynauiLetterLSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
