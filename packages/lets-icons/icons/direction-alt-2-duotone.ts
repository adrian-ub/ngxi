import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDirectionAlt2DuotoneIcon],svg[lets-icons-direction-alt-2-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M2 8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8v6.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 20 18.88 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 17.72 2 16.88 2 15.2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m7 9l4.121 4.121A3 3 0 0 1 12 15.243M7 9h3M7 9v3m5 3.243V17m0-1.757V20m0-4.757a3 3 0 0 1 .879-2.122L17 9m0 0h-3m3 0v3"></svg:path></svg:g>`,
})
export class LetsIconsDirectionAlt2DuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
