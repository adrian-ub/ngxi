import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicalMarkIcon],svg[icon-park-medical-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16 15C16 13.3431 17.3431 12 19 12H37C38.6569 12 40 13.3431 40 15V33C40 34.6569 38.6569 36 37 36H19C17.3431 36 16 34.6569 16 33V15Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 4L8 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 19L16 19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 29L16 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 24L34 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 18V30"></svg:path></svg:g>`,
})
export class IconParkMedicalMarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
