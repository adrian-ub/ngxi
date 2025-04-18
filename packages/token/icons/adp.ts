import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAdpIcon],svg[token-adp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.051 3.249a1.194 1.194 0 0 0-2.1 0L2.14 20.097c-.131.244-.163.5-.125.731c2.93.838 7.649.469 9.986-3.956c2.063-3.918 3.275-6.074 4.031-7.43l.138-.238l-3.119-5.949zm3.369 6.436l-3.824 7.187a6.775 6.775 0 0 0 6.655 4.5c1.156 0 2.05-.207 2.725-.5c.05-.25.025-.519-.106-.775z"></svg:path>`,
})
export class TokenAdpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
