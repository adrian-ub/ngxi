import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsTelescopeIcon],svg[majesticons-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#majesticonsTelescope0)"><svg:path fill="currentColor" d="m11.026 7.366l6.063-3.5l3 5.196l-6.063 3.5a1 1 0 0 1-1.366-.366l-3.03 1.75l-2.166 1.25a1 1 0 0 1-1.366-.366l-1.732 1a1 1 0 1 1-1-1.732l1.732-1a1 1 0 0 1 .366-1.366l5.196-3a1 1 0 0 1 .366-1.366"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16.588 3l.5.866m3.5 6.062l-.5-.866m-3-5.196l-6.062 3.5a1 1 0 0 0-.366 1.366v0m6.428-4.866l3 5.196m0 0l-6.062 3.5a1 1 0 0 1-1.366-.366v0m-2-3.464l-5.196 3a1 1 0 0 0-.366 1.366v0m5.562-4.366l2 3.464m0 0l-3.03 1.75m-4.532-.848l-1.732 1A1 1 0 0 0 3 15.464v0a1 1 0 0 0 1.366.366l1.732-1m-1-1.732l1 1.732m0 0a1 1 0 0 0 1.366.366l2.165-1.25m0 0L13 20m-3.37-6.054L7.097 20"></svg:path></svg:g><svg:defs><svg:clippath id="majesticonsTelescope0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MajesticonsTelescopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
