import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignIndentRightIcon],svg[tdesign-indent-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4H2v2h20V4zm6 7H8v2h14v-2zm-7 7h20v2H2zm3.805-5.293L6.512 12l-.707-.707l-1.768-1.768l-.707-.707l-1.414 1.414l.707.708L3.683 12l-1.06 1.06l-.707.708l1.414 1.414l.707-.707z"></svg:path>`,
})
export class TdesignIndentRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
