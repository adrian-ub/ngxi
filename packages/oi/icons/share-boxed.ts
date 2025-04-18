import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiShareBoxedIcon],svg[oi-share-boxed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.75 0C.34 0 0 .34 0 .75v5.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75V5H5v1H1V1h2V0zM6 0v1C3.95 1 2.3 2.54 2.06 4.53C2.27 3.65 3.05 3 4 3h2v1l2-2z"></svg:path>`,
})
export class OiShareBoxedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
