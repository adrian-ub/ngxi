import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPaintedScreenIcon],svg[icon-park-painted-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="28" x="5" y="10" fill="#2F88FF" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 24L13 17"></svg:path><svg:rect width="4" height="4" x="15" y="29" fill="#fff" rx="2" transform="rotate(90 15 29)"></svg:rect></svg:g>`,
})
export class IconParkPaintedScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
