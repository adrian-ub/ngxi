import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiChocolateBarIcon],svg[openmoji-chocolate-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a57939" d="M53 32.755V5.906H19v33.61"></svg:path><svg:path fill="#ea5a47" d="m55 25l-38 7v35h38z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M38 9h11v9H38zM23 9h11v9H23zm32 16l-38 7v35h38z"></svg:path><svg:path d="M53 20.932V5H19v22.541"></svg:path><svg:path d="M38 23.847V22h9.503M23 26.764V22h11v2.625"></svg:path><svg:path d="M47.503 22H38v1.847m-4 .778V22H23v4.764"></svg:path></svg:g>`,
})
export class OpenmojiChocolateBarIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
