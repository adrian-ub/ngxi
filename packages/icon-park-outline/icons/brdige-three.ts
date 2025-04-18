import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBrdigeThreeIcon],svg[icon-park-outline-brdige-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 12v26m32-26v26"></svg:path><svg:path d="M8 38s8-11 16-11s16 11 16 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 27h40M4 19h40"></svg:path><svg:path stroke-linecap="round" d="M24 15v12m-8-8v8m16-8v8"></svg:path></svg:g>`,
})
export class IconParkOutlineBrdigeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
