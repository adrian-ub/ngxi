import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggGitterIcon],svg[gg-gitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1.5h2v13H5zm4 3h2v18H9zm6 0h-2v18h2zm2 0h2v10h-2z"></svg:path>`,
})
export class GgGitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
