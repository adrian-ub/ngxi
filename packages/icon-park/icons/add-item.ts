import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAddItemIcon],svg[icon-park-add-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 30V24"></svg:path><svg:path fill="#2F88FF" d="M6 30H24H42V42H6V30Z"></svg:path><svg:line x1="6" x2="6" y1="12.5" y2="11.5"></svg:line><svg:line x1="6" x2="6" y1="18" y2="17"></svg:line><svg:line x1="6" x2="6" y1="7" y2="6"></svg:line><svg:line x1="42" x2="42" y1="12.5" y2="11.5"></svg:line><svg:line x1="42" x2="42" y1="18" y2="17"></svg:line><svg:line x1="42" x2="42" y1="7" y2="6"></svg:line><svg:line x1="42" x2="41" y1="18" y2="18"></svg:line><svg:line x1="7" x2="6" y1="18" y2="18"></svg:line><svg:line x1="7" x2="6" y1="6" y2="6"></svg:line><svg:line x1="14" x2="13" y1="6" y2="6"></svg:line><svg:line x1="21" x2="20" y1="6" y2="6"></svg:line><svg:line x1="21" x2="20" y1="18" y2="18"></svg:line><svg:line x1="28" x2="27" y1="6" y2="6"></svg:line><svg:line x1="14" x2="13" y1="18" y2="18"></svg:line><svg:line x1="28" x2="27" y1="18" y2="18"></svg:line><svg:line x1="35" x2="34" y1="6" y2="6"></svg:line><svg:line x1="35" x2="34" y1="18" y2="18"></svg:line><svg:line x1="42" x2="41" y1="6" y2="6"></svg:line></svg:g>`,
})
export class IconParkAddItemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
