import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFontsansserifIcon],svg[whh-fontsansserif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 192v832H320V192H0V0h832v192z"></svg:path>`,
})
export class WhhFontsansserifIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
