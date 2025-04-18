import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFlashlampIcon],svg[icon-park-flashlamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M23 14L18 24H30L25 34"></svg:path></svg:g>`,
})
export class IconParkFlashlampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
