import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFnsaIcon],svg[token-branded-fnsa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18.75 5.25h-6.587c-3.881 0-6.913 2.959-6.913 6.778V21H3v-8.972C3 7.038 7.106 3 12.163 3H21v8.972C21 16.962 16.894 21 11.837 21h-4.9v-9.377a5.636 5.636 0 0 1 5.547-4.686H16.5v2.25h-3.752c-1.693 0-2.891.704-3.375 2.25H16.5v2.25H9.187v5.063h2.65c3.881 0 6.913-2.959 6.913-6.778z"></svg:path>`,
})
export class TokenBrandedFnsaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
