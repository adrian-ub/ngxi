import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRecordIcon],svg[icon-park-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="24" x="5" y="18" fill="#2F88FF" stroke="#000" stroke-linecap="round" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M8 12H40"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 6L33 6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26 24V30"></svg:path><svg:path stroke="#fff" d="M18 32.7491C18 31.2308 19.2894 30 20.88 30H26V33.2509C26 34.7692 24.7106 36 23.12 36H20.88C19.2894 36 18 34.7692 18 33.2509V32.7491Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 25L26 24"></svg:path></svg:g>`,
})
export class IconParkRecordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
