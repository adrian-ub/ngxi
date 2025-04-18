import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laPaperclipIcon],svg[la-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4c-1.39 0-2.758.54-3.813 1.594l-9.375 9.375c-2.972 2.972-2.972 7.808 0 10.781s7.81 2.973 10.782 0l6.25-6.25l-1.407-1.406l-6.25 6.25a5.623 5.623 0 0 1-7.968 0a5.623 5.623 0 0 1 0-7.969L18.594 7a3.414 3.414 0 0 1 4.843 0a3.414 3.414 0 0 1 0 4.844l-9.375 9.375c-.48.48-1.238.48-1.718 0a1.205 1.205 0 0 1 0-1.719l8.594-8.594L19.53 9.5l-8.593 8.594a3.213 3.213 0 0 0 0 4.531a3.213 3.213 0 0 0 4.53 0l9.376-9.375A5.423 5.423 0 0 0 21 4"></svg:path>`,
})
export class LaPaperclipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
