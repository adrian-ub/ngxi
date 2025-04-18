import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHomealtIcon],svg[whh-homealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.5 556.5Q985 576 957.5 576T911 557l-15-15v419q0 26-18.5 45t-45.5 19H192q-27 0-45.5-19T128 961V542l-15 15q-19 19-46.5 19t-47-19.5t-19.5-47T19 463L463 19Q479 3 501.5.5T543 10q8 0 18 9l444 444q19 19 19 46.5t-19.5 47M768 414L512 158L256 414v483h512z"></svg:path>`,
})
export class WhhHomealtIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
