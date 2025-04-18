import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCdIcon],svg[icon-park-outline-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="24" r="18"></svg:circle><svg:path stroke-linecap="round" d="M13 24c0-6.075 4.925-11 11-11"></svg:path><svg:circle cx="24" cy="24" r="5"></svg:circle></svg:g>`,
})
export class IconParkOutlineCdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
