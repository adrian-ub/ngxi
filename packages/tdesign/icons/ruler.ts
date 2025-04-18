import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignRulerIcon],svg[tdesign-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.719 2h11.035L13.64 20H22v2H1.719zm4.869 18l3.657-16H8.28l-.625 2.5h4.22v2h-4.72L6.53 11h4.22v2H6.03l-.625 2.5h4.22v2h-4.72L4.28 20z"></svg:path>`,
})
export class TdesignRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
