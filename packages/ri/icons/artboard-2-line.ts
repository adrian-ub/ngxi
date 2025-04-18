import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArtboard2LineIcon],svg[ri-artboard-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8v8h8V8zM6 6h12v12H6zm0-4h2v3H6zm0 17h2v3H6zM2 6h3v2H2zm0 10h3v2H2zM19 6h3v2h-3zm0 10h3v2h-3zM16 2h2v3h-2zm0 17h2v3h-2z"></svg:path>`,
})
export class RiArtboard2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
