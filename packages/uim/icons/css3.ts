import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimCss3Icon],svg[uim-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.883 21.095l9.098-3.02L22 3H4.958L4.31 6.364h13.657l-.425 2.148H3.864l-.669 3.363h13.658l-.75 3.85l-5.511 1.803l-4.762-1.802l.325-1.682H2.79L2 18.076z"></svg:path>`,
})
export class UimCss3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
