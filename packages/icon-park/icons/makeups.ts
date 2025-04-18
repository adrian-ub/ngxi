import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMakeupsIcon],svg[icon-park-makeups-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"></svg:path><svg:path d="M37.6098 9.47214L37.8652 10.2582H38.6917L38.023 10.744L38.2784 11.5301L37.6098 11.0443L36.9411 11.5301L37.1965 10.744L36.5278 10.2582H37.3543L37.6098 9.47214Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 31C16 31 18 35 24 35C30 35 32 31 32 31"></svg:path><svg:circle cx="17" cy="22" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="31" cy="22" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkMakeupsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
