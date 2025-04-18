import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePokerIcon],svg[icon-park-outline-poker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 4H12v40h30z"></svg:path><svg:path stroke-linecap="round" d="M4 11.79L12 10v34z" clip-rule="evenodd"></svg:path><svg:path d="m27 18l-5 6l5 6l5-6z"></svg:path><svg:path stroke-linecap="round" d="M18 10v4m18 20v4"></svg:path></svg:g>`,
})
export class IconParkOutlinePokerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
