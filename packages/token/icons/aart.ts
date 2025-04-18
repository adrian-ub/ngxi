import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAartIcon],svg[token-aart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.071 3.844H8.93L3 20.156h5.44l.747-2.081a3.376 3.376 0 0 1 1.8-5.074L12 10.144L13.012 13a3.373 3.373 0 0 1 1.806 5.074l.743 2.081H21z"></svg:path><svg:path fill="currentColor" d="M12 18.469a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5"></svg:path>`,
})
export class TokenAartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
