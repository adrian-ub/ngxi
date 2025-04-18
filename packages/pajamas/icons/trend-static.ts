import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasTrendStaticIcon],svg[pajamas-trend-static-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.847 5.142a1 1 0 0 1 0 1.715l-6.665 4a1 1 0 0 1-1.515-.858V2.001a1 1 0 0 1 1.515-.858z"></svg:path>`,
})
export class PajamasTrendStaticIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
