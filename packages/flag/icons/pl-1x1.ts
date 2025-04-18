import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagPl1x1Icon],svg[flag-pl-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#fff" d="M512 512H0V0h512z"></svg:path><svg:path fill="#dc143c" d="M512 512H0V256h512z"></svg:path></svg:g>`,
})
export class FlagPl1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
