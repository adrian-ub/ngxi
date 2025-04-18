import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGlassesOneIcon],svg[icon-park-glasses-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="14.5" cy="24.5" r="6.5" fill="#2F88FF"></svg:circle><svg:circle r="6.5" fill="#2F88FF" transform="matrix(-1 0 0 1 33.5 24.5)"></svg:circle><svg:path d="M4 24H8"></svg:path><svg:path d="M44 24H40"></svg:path><svg:path d="M20 21C20.5 19 22 17 24 17C26 17 27.5 19 28 21"></svg:path></svg:g>`,
})
export class IconParkGlassesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
