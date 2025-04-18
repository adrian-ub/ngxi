import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterISolidIcon],svg[mynaui-letter-i-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a1 1 0 0 0 0 2h2.125v8H9a1 1 0 1 0 0 2h6.25a1 1 0 1 0 0-2h-2.125V8h2.125a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MynauiLetterISolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
