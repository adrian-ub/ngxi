import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDeliciousIcon],svg[logos-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M0 0h128v128H0z"></svg:path><svg:path fill="#333" d="M0 128h128v128H0z"></svg:path><svg:path fill="#EEE" d="M128 128h128v128H128z"></svg:path><svg:path fill="#39F" d="M128 0h128v128H128z"></svg:path>`,
})
export class LogosDeliciousIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
