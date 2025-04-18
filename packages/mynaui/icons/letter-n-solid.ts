import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterNSolidIcon],svg[mynaui-letter-n-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.8 6.4A1 1 0 0 0 7 7v10a1 1 0 1 0 2 0v-7l5.7 7.6a1 1 0 0 0 1.8-.6V7a1 1 0 1 0-2 0v7z"></svg:path>`,
})
export class MynauiLetterNSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
