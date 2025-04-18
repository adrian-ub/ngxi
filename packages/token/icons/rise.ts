import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRiseIcon],svg[token-rise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.463 20.995a9.15 9.15 0 0 0 6.534-8.824C20.997 7.112 16.97 3 12 3s-8.998 4.105-8.998 9.172c0 4.194 2.761 7.731 6.535 8.828l1.9-11.252l-4.78 3.57l-.28-.286L12 5.249l5.623 7.783l-.281.281l-4.78-3.565z"></svg:path>`,
})
export class TokenRiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
