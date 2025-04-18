import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHoprIcon],svg[token-hopr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.724 21c.175-5.168.076-13.355-.4-18h3.013l.395 7.165c.883-1.289 3.078-3.397 5.458-2.88c2.375.523 3.02 1.742 3.925 4.436c.773 2.305.58 6.95.395 9.279h-3.025c.796-7.85-.5-12.327-3.205-10.202C9.29 13.144 8.86 17.986 8.738 21h-3.02z"></svg:path>`,
})
export class TokenHoprIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
