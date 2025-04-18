import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenQmallIcon],svg[token-qmall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20.22h-1.985l-2.277-2.113a8.226 8.226 0 1 1 1.85-2.437l-1.223-1.013a6.684 6.684 0 1 0-1.764 2.396l-1.136-1.06a5.142 5.142 0 1 1 1.039-1.135zm-9.769-4.627a3.598 3.598 0 1 0 0-7.197a3.598 3.598 0 0 0 0 7.197"></svg:path>`,
})
export class TokenQmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
