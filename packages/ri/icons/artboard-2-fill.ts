import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArtboard2FillIcon],svg[ri-artboard-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h12v12H6zm0-4h2v3H6zm0 17h2v3H6zM2 6h3v2H2zm0 10h3v2H2zM19 6h3v2h-3zm0 10h3v2h-3zM16 2h2v3h-2zm0 17h2v3h-2z"></svg:path>`,
})
export class RiArtboard2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
