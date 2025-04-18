import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineNoodlesIcon],svg[icon-park-outline-noodles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24c0 11.046 6.667 20 20 20s20-8.954 20-20z" clip-rule="evenodd"></svg:path><svg:path d="M16 24V8m8 16V6m8 18V4M8 24V10m-4 3l40-9"></svg:path></svg:g>`,
})
export class IconParkOutlineNoodlesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
