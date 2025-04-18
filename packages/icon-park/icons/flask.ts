import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFlaskIcon],svg[icon-park-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37.845 35.0219L44 41.3158V44H4V41.3158L10.1184 35.0594L37.845 35.0219Z"></svg:path><svg:path stroke-linecap="round" d="M10.104 35.0743L18.0002 27V6H30.0002V27L37.8727 35.0502"></svg:path><svg:path stroke-linecap="round" d="M11 35H37"></svg:path><svg:path stroke-linecap="round" d="M30 14H24"></svg:path><svg:path stroke-linecap="round" d="M30 20H24"></svg:path></svg:g>`,
})
export class IconParkFlaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
