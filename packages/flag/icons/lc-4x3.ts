import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLc4x3Icon],svg[flag-lc-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#65cfff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#fff" d="m318.9 42l162.7 395.3l-322.6.9z"></svg:path><svg:path fill="#000001" d="m319 96.5l140.8 340l-279 .8z"></svg:path><svg:path fill="#ffce00" d="m318.9 240.1l162.7 197.6l-322.6.5z"></svg:path></svg:g>`,
})
export class FlagLc4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
