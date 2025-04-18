import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPaperMoneyIcon],svg[icon-park-paper-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 15L24 21L30 15"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 23H31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 29H31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 23V34"></svg:path></svg:g>`,
})
export class IconParkPaperMoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
