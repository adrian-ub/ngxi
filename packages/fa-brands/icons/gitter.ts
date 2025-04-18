import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faBrandsGitterIcon],svg[fa-brands-gitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M66.4 322.5H16V0h50.4zM166.9 76.1h-50.4V512h50.4zm100.6 0h-50.4V512h50.4zM368 76h-50.4v247H368z"></svg:path>`,
})
export class FaBrandsGitterIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
