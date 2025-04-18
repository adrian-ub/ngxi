import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosDatocmsIconIcon],svg[logos-datocms-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosDatocmsIcon0" x1="0%" x2="100%" y1="49.999%" y2="49.999%"><svg:stop offset="0%" stop-color="#FF593D"></svg:stop><svg:stop offset="100%" stop-color="#FF7751"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosDatocmsIcon0)" d="M128.002.653H0v257.646h128.002c64.017 0 127.998-57.68 127.998-128.805C256 58.368 192.019.653 128.002.653m0 187.36c-32.33-.013-58.528-26.231-58.516-58.56s26.23-58.529 58.559-58.517c32.33.011 58.529 26.228 58.518 58.558a58.52 58.52 0 0 1-58.561 58.518"></svg:path>`,
})
export class LogosDatocmsIconIcon {
  readonly viewBox = input("0 0 256 259")
  readonly width = input("0.99em")
  readonly height = input("1em")
}
