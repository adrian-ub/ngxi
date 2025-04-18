import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagLv1x1Icon],svg[flag-lv-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd"><svg:path fill="#fff" d="M0 0h512v512H0z"></svg:path><svg:path fill="#981e32" d="M0 0h512v204.8H0zm0 307.2h512V512H0z"></svg:path></svg:g>`,
})
export class FlagLv1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
