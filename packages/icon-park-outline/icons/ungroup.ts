import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineUngroupIcon],svg[icon-park-outline-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.273 4H4v7.273h7.273zM44 36.727h-7.273V44H44zM11.273 24H4v7.273h7.273zM24 36.727h-7.273V44H24zM31.273 4H24v7.273h7.273zM44 16.727h-7.273V24H44z"></svg:path><svg:path stroke-linecap="round" d="M11.273 7.636H24m0 32.728h12.727M11.273 27.637h16.364V11.273m1.191 9.09h7.899M20.363 36.727v-9.099zM7.637 11.273V24m32.726 0v12.727"></svg:path></svg:g>`,
})
export class IconParkOutlineUngroupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
