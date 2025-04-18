import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagSj1x1Icon],svg[flag-sj-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ef2b2d" d="M0 0h512v512H0z"></svg:path><svg:path fill="#fff" d="M128 0h128v512H128z"></svg:path><svg:path fill="#fff" d="M0 192h512v128H0z"></svg:path><svg:path fill="#002868" d="M160 0h64v512h-64z"></svg:path><svg:path fill="#002868" d="M0 224h512v64H0z"></svg:path>`,
})
export class FlagSj1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
