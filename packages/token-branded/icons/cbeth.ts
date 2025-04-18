import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCbethIcon],svg[token-branded-cbeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#0052FF"><svg:path d="M12 20.156a8.157 8.157 0 1 0 0-16.313a8.157 8.157 0 0 0 0 16.313M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path><svg:path fill-opacity=".6" d="M12 5.25v4.781l3.938 1.806z"></svg:path><svg:path d="m12 5.25l-3.937 6.587l3.937-1.8z"></svg:path><svg:path fill-opacity=".6" d="M12 14.936v3.252l3.938-5.597z"></svg:path><svg:path d="M12 18.188v-3.252l-3.937-2.345z"></svg:path><svg:path fill-opacity=".2" d="m12 14.188l3.938-2.352l-3.938-1.8z"></svg:path><svg:path fill-opacity=".6" d="M8.063 11.837L12 14.188v-4.157z"></svg:path></svg:g>`,
})
export class TokenBrandedCbethIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
