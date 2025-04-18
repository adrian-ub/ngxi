import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRdtIcon],svg[token-rdt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.021 4.059L8.194 7.897l3.827 3.833l3.828-3.833zM6.828 9.554L3 13.392l3.828 3.833l3.827-3.833zm6.517 3.838l3.827-3.838L21 13.392l-3.828 3.833zm-6.126 6.549l4.85-4.86l4.844 4.86z"></svg:path>`,
})
export class TokenRdtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
