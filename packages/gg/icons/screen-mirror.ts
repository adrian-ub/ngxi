import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggScreenMirrorIcon],svg[gg-screen-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 8h14v6h-3v2h5V6H3v10h5v-2H5z"></svg:path><svg:path d="M16.33 19L12 13l-4.33 6z"></svg:path></svg:g>`,
})
export class GgScreenMirrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
