import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCssthreeIcon],svg[whh-cssthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m832 896l-384 128L64 896L0 0h896zM128 128l12 128h436v128H151l12 128h413v192l-128 32l-128-32V576H169l23 256l256 64l256-64l64-704z"></svg:path>`,
})
export class WhhCssthreeIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
