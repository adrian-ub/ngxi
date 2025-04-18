import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenCbethIcon],svg[token-cbeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.156a8.157 8.157 0 1 0 0-16.313a8.157 8.157 0 0 0 0 16.313M21 12a9 9 0 1 1-17.999 0A9 9 0 0 1 21 12"></svg:path><svg:path fill="currentColor" d="M12 5.25v4.781l3.938 1.806zm0 0l-3.937 6.587l3.937-1.8zm0 9.686v3.252l3.938-5.597zm0 3.252v-3.252l-3.937-2.345z"></svg:path><svg:path fill="currentColor" d="m12 14.188l3.938-2.352l-3.938-1.8zm-3.937-2.351L12 14.188v-4.157z"></svg:path>`,
})
export class TokenCbethIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
