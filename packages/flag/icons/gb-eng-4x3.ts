import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagGbEng4x3Icon],svg[flag-gb-eng-4x3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M0 0h640v480H0z"></svg:path><svg:path fill="#ce1124" d="M281.6 0h76.8v480h-76.8z"></svg:path><svg:path fill="#ce1124" d="M0 201.6h640v76.8H0z"></svg:path>`,
})
export class FlagGbEng4x3Icon {
  readonly viewBox = input("0 0 640 480")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
