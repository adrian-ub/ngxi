import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHtmlfiveIcon],svg[whh-htmlfive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m832 896l-384 128L64 896L0 0h896zM128 128l35 384h413v192l-128 32l-128-32V576H169l23 256l256 64l256-64l41-448H320V256h436l12-128z"></svg:path>`,
})
export class WhhHtmlfiveIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
