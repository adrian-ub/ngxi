import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenWrxIcon],svg[token-wrx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.76 15.938L3 7.5l3.937 2.813zm.927 1.124L12.04 4.125l3.898 5.996l-8.814 6.941zM21 7.5L8.794 17.062H20.19zM3.563 18.188h16.875v1.687H3.563z"></svg:path>`,
})
export class TokenWrxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
