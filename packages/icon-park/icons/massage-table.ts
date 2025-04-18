import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMassageTableIcon],svg[icon-park-massage-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M14 17C14 15.8954 14.8954 15 16 15H42C43.1046 15 44 15.8954 44 17V23H14V17Z"></svg:path><svg:path stroke-linecap="round" d="M26 23L14 37"></svg:path><svg:path stroke-linecap="round" d="M32 23L44 37"></svg:path><svg:path stroke-linecap="round" d="M14 23L6 23"></svg:path><svg:path stroke-linecap="round" d="M39 31L19 31"></svg:path><svg:path stroke-linecap="round" d="M6 13V23"></svg:path><svg:path stroke-linecap="round" d="M14 23V40"></svg:path><svg:path stroke-linecap="round" d="M44 23V40"></svg:path><svg:path stroke-linecap="round" d="M9 14L3 12"></svg:path></svg:g>`,
})
export class IconParkMassageTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
