import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiProjectIcon],svg[oi-project-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v7h1V0zm7 0v7h1V0zM2 1v1h2V1zm1 2v1h2V3zm1 2v1h2V5z"></svg:path>`,
})
export class OiProjectIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
