import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineClothesDiapersIcon],svg[icon-park-outline-clothes-diapers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 11h36v8s0 8-4 12s-10.158 6-10.158 6h-7.684S14 35 10 31S6 19 6 19z"></svg:path><svg:path d="M20.158 37s.1-7.074-3.158-11c-3.044-3.669-11-7-11-7m21.842 18s-.1-7.075 3.158-11c3.044-3.669 11-7 11-7"></svg:path></svg:g>`,
})
export class IconParkOutlineClothesDiapersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
