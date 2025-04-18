import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsAsciicircumIcon],svg[ls-asciicircum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 516L230 11l6-11h68l6 11l231 505h-79L270 97L79 516z"></svg:path>`,
})
export class LsAsciicircumIcon {
  readonly viewBox = input("0 0 541 730")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
