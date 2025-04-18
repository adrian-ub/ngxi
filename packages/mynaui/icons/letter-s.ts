import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterSIcon],svg[mynaui-letter-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.25 8.563V8.25C15.25 7.56 14.69 7 14 7h-3.75C9.56 7 9 7.56 9 8.25v1.23c0 .767.467 1.457 1.179 1.742l3.892 1.556a1.875 1.875 0 0 1 1.179 1.741v1.231c0 .69-.56 1.25-1.25 1.25h-3.75C9.56 17 9 16.44 9 15.75v-.312"></svg:path>`,
})
export class MynauiLetterSIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
