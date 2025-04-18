import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenSeth2Icon],svg[token-seth2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13.588V3l-4.235 8.205zm0 0V3l4.235 8.205z"></svg:path><svg:path fill="currentColor" d="m12 13.587l-4.235-2.382l-3.176 6.088zm0 0l4.235-2.382l3.176 6.088zM12 21v-7.41l-7.41 3.704zm0 0v-7.41l7.411 3.705z"></svg:path>`,
})
export class TokenSeth2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
