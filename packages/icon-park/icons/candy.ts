import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCandyIcon],svg[icon-park-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="10" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M24 28C21.7909 28 20 26.2091 20 24"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M16.6875 16.8125L3.90824 14.9668L14.8418 4.03324L16.6875 16.8125Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M31.3125 31.3125L44.0918 33.1582L33.1582 44.0918L31.3125 31.3125Z"></svg:path></svg:g>`,
})
export class IconParkCandyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
