import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChorusProIcon],svg[arcticons-chorus-pro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="15.056" height="15.056" x="10.986" y="16.029" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.107" ry="1.107"></svg:rect><svg:rect width="7.676" height="7.676" x="25.894" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.156" ry="1.156"></svg:rect><svg:rect width="7.676" height="7.676" x="33.176" y="34.825" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.156" ry="1.156"></svg:rect><svg:rect width="7.676" height="7.676" x="7.148" y="11.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.156" ry="1.156"></svg:rect><svg:rect width="10.226" height="10.226" x="20.736" y="24.098" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.54" ry="1.54"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.343 16.109l1.241-3.033m3.946 20.773l2.646 1.714"></svg:path>`,
})
export class ArcticonsChorusProIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
