import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHdVideoboxIcon],svg[arcticons-hd-videobox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M28.617 26.835v9.943l8.615-4.974v-9.886zm-15.741 6.038l.033-9.976zm4.214 2.466l.033-9.976zm-1.26-22.366l9.714 5.652l3.4-7.64z"></svg:path><svg:path d="M41.753 13.724L23.998 24.062m.008 20.438l17.757-10.311l-.012-20.465L24.002 3.5L6.245 13.773l-.003 20.431zm0 0l-.004-20.439L6.236 13.773"></svg:path></svg:g>`,
})
export class ArcticonsHdVideoboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
