import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBringToFrontIcon],svg[icon-park-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M41 18H19C18.4477 18 18 18.4477 18 19V41C18 41.5523 18.4477 42 19 42H41C41.5523 42 42 41.5523 42 41V19C42 18.4477 41.5523 18 41 18Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.96906 6H6V10.0336"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.99705 30H6V26.012"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26.0023 6H30V10.0152"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.0283 6H20.0083"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 16C6 18.6536 6 19.9869 6 20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 16C30 18.6765 30 19.3456 30 18.0074"></svg:path><svg:path stroke-linecap="round" d="M15.9922 30H17.9996"></svg:path></svg:g>`,
})
export class IconParkBringToFrontIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
