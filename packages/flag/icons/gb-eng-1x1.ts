import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGbEng1x1Icon],svg[flag-gb-eng-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#ce1124" d="M215 0h82v512h-82z"></svg:path><svg:path fill="#ce1124" d="M0 215h512v82H0z"></svg:path>`,
})
export class FlagGbEng1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
