import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAddSubsetIcon],svg[icon-park-add-subset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 28V35H18"></svg:path><svg:path fill="#2F88FF" d="M18 28H42V42H18V35V28Z"></svg:path><svg:line x1="6" x2="6" y1="13.5" y2="12.5"></svg:line><svg:line x1="6" x2="6" y1="20" y2="19"></svg:line><svg:line x1="6" x2="6" y1="7" y2="6"></svg:line><svg:line x1="32" x2="32" y1="13.5" y2="12.5"></svg:line><svg:line x1="32" x2="32" y1="20" y2="19"></svg:line><svg:line x1="32" x2="32" y1="7" y2="6"></svg:line><svg:line x1="32" x2="31" y1="20" y2="20"></svg:line><svg:line x1="7" x2="6" y1="20" y2="20"></svg:line><svg:line x1="7" x2="6" y1="6" y2="6"></svg:line><svg:line x1="13" x2="12" y1="6" y2="6"></svg:line><svg:line x1="19.5" x2="18.5" y1="6" y2="6"></svg:line><svg:line x1="19.5" x2="18.5" y1="20" y2="20"></svg:line><svg:line x1="26" x2="25" y1="6" y2="6"></svg:line><svg:line x1="13" x2="12" y1="20" y2="20"></svg:line><svg:line x1="26" x2="25" y1="20" y2="20"></svg:line><svg:line x1="32" x2="31" y1="6" y2="6"></svg:line></svg:g>`,
})
export class IconParkAddSubsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
