import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamColorIcon],svg[jam-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.327 6.99H2.672l-.477 1.306c-.191.524-.826.812-1.417.642c-.59-.17-.915-.734-.723-1.258l2.304-6.312C2.743.32 4.011-.256 5.193.084C5.88.282 6.418.76 6.64 1.368L8.945 7.68c.191.524-.133 1.088-.724 1.258c-.59.17-1.225-.118-1.417-.642l-.477-1.307zm-.729-1.998L4.5 1.984L3.4 4.992h2.197zM10 4a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class JamColorIcon {
  readonly viewBox = input("-6 -7.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
