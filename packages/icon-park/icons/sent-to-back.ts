import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSentToBackIcon],svg[icon-park-sent-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M30 18H41C41.5523 18 42 18.4477 42 19V41C42 41.5523 41.5523 42 41 42H19C18.4477 42 18 41.5523 18 41V30"></svg:path><svg:path stroke-linejoin="round" d="M9.96906 6H6V10.0336"></svg:path><svg:path stroke-linejoin="round" d="M9.99705 30H6V26.012"></svg:path><svg:path stroke-linejoin="round" d="M26 30H29.9971V26.012"></svg:path><svg:path stroke-linejoin="round" d="M26.0023 6H30V9.99785"></svg:path><svg:path d="M16.0283 6H20.0083"></svg:path><svg:path stroke-linejoin="round" d="M6 16V20.0148"></svg:path><svg:path stroke-linejoin="round" d="M30 16V20.0148"></svg:path><svg:path stroke-linejoin="round" d="M15.9922 30H19.9996"></svg:path></svg:g>`,
})
export class IconParkSentToBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
