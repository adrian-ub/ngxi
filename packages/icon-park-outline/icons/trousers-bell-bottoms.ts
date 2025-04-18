import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTrousersBellBottomsIcon],svg[icon-park-outline-trousers-bell-bottoms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m16 12l2-8h12l2 8v12l4 17l-12 3l-12-3l4-17zm8 32V16"></svg:path><svg:path d="m12 41l12 3l12-3"></svg:path></svg:g>`,
})
export class IconParkOutlineTrousersBellBottomsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
