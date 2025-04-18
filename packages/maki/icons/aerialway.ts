import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiAerialwayIcon],svg[maki-aerialway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5H8V2.6a1 1 0 0 0 .42-.46l5.08-.64a.5.5 0 0 0 0-1l-5.22.65a1 1 0 0 0-.78-.4a1 1 0 0 0-.92.62L1.5 2a.5.5 0 0 0 0 1l5.22-.65q.117.151.28.25V5H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1m-6 6H3V7h4zm5 0H8V7h4z"></svg:path>`,
})
export class MakiAerialwayIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
