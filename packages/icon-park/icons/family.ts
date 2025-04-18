import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFamilyIcon],svg[icon-park-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M10 19C10 19 4.85714 21 4 28"></svg:path><svg:path d="M38 19C38 19 43.1429 21 44 28"></svg:path><svg:path d="M18 19C18 19 22.8 20.1667 24 26"></svg:path><svg:path d="M30 19C30 19 25.2 20.1667 24 26"></svg:path><svg:path d="M20 34C20 34 15.8 34.75 14 40"></svg:path><svg:path d="M28 34C28 34 32.2 34.75 34 40"></svg:path><svg:circle cx="24" cy="31" r="5" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="14" r="6" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:circle cx="14" cy="14" r="6" fill="#2F88FF" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class IconParkFamilyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
