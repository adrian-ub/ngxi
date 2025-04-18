import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAddSubsetIcon],svg[icon-park-solid-add-subset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 28v7h8"></svg:path><svg:path fill="currentColor" d="M18 28h24v14H18z"></svg:path><svg:path d="M6 13.5v-1M6 20v-1M6 7V6m26 7.5v-1m0 7.5v-1m0-12V6m0 14h-1M7 20H6M7 6H6m7 0h-1m7.5 0h-1m1 14h-1M26 6h-1M13 20h-1m14 0h-1m7-14h-1"></svg:path></svg:g>`,
})
export class IconParkSolidAddSubsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
