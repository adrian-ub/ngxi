import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCrownThreeIcon],svg[icon-park-outline-crown-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 42h22l6-21l-10 5l-7-14l-7 14l-10-5z"></svg:path><svg:circle cx="7" cy="18" r="3"></svg:circle><svg:circle cx="24" cy="9" r="3"></svg:circle><svg:circle cx="41" cy="18" r="3"></svg:circle></svg:g>`,
})
export class IconParkOutlineCrownThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
