import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEggIcon],svg[icon-park-outline-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="24" r="10" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path d="M44 24c0 2.633-.508 5.146-1.433 7.448c-.936 2.331-4.129.071-7.346 3.521c-3.216 3.45-.71 6.267-3.204 7.36A19.9 19.9 0 0 1 24 44C12.954 44 4 35.046 4 24S12.954 4 24 4s20 8.954 20 20Z"></svg:path><svg:path stroke-linecap="round" d="M20 25s.21 1.21 1 2s2 1 2 1"></svg:path></svg:g>`,
})
export class IconParkOutlineEggIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
