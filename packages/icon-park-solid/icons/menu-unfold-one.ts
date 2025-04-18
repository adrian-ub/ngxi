import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidMenuUnfoldOneIcon],svg[icon-park-solid-menu-unfold-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 10.5h32m-16 9h16m-16 9h16m-32 9h32"></svg:path><svg:path fill="currentColor" d="m16 19l-8 5l8 5z"></svg:path></svg:g>`,
})
export class IconParkSolidMenuUnfoldOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
