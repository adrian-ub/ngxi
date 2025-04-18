import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosKemalIcon],svg[logos-kemal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF4F4F" d="m128.594 0l1.393 3.076l.194 167.825l-1.587 3.093H0L20.941 3.674A4.185 4.185 0 0 1 25.095 0z"></svg:path><svg:path fill="#F92727" d="M128.594 0v173.994H256L235.06 3.674A4.185 4.185 0 0 0 230.904 0z"></svg:path><svg:path d="M197.051 105.538h-5.616L191.346 0h4.725z"></svg:path>`,
})
export class LogosKemalIcon {
  readonly viewBox = input("0 0 256 174")
  readonly width = input("1.48em")
  readonly height = input("1em")
}
