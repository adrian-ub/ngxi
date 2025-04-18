import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterCIcon],svg[mynaui-letter-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 9.5v-.312C15.5 7.979 14.52 7 13.313 7H10.5A2.5 2.5 0 0 0 8 9.5v5a2.5 2.5 0 0 0 2.5 2.5h2.813c1.208 0 2.187-.98 2.187-2.187V14.5"></svg:path>`,
})
export class MynauiLetterCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
