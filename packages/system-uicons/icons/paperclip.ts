import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[systemUiconsPaperclipIcon],svg[system-uicons-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.5 11.5l-5 5q-3.781 4.144-7 1q-3.22-3.145 1-7l5-5q2.878-3.122 5-1c2.122 2.122 1.08 3.08-1 5l-5 5Q8.082 16.082 7 15c-1.082-1.082-.555-1.555.5-2.5l5-5"></svg:path>`,
})
export class SystemUiconsPaperclipIcon {
  readonly viewBox = input("0 0 21 21")
  readonly width = input("1em")
  readonly height = input("1em")
}
