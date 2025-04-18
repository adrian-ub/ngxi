import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt3DuotoneIcon],svg[lets-icons-direction-alt-3-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 14l-3.121 3.121A3 3 0 0 0 12 19.243M16 14l1-1m-1 1l1 1v-2m-1 1l-1-1h2m-5 6.243V20V10m0 9.243a3 3 0 0 0-.879-2.122L8 14m0 0l-1-1m1 1l1-1H7m1 1l-1 1v-2m5-3V8.5m0 1.5h1.5L12 8.5m0 1.5h-1.5L12 8.5"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAlt3DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
