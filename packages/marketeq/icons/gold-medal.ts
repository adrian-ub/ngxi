import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqGoldMedalIcon],svg[marketeq-gold-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m23.708 17.5l-2.875.396l2.084 1.854l-.5 2.646L25 21.146l2.583 1.25l-.5-2.646l2.084-1.854l-2.875-.396L25 15.104z"></svg:path><svg:path stroke="#306CFE" d="M25 31.25c6.904 0 12.5-5.596 12.5-12.5S31.904 6.25 25 6.25s-12.5 5.596-12.5 12.5s5.596 12.5 12.5 12.5"></svg:path><svg:path stroke="#306CFE" d="M33.917 27.5a12.5 12.5 0 0 1-6.834 3.583l4.167 10.584l3.125-2.605l4.354.438zM11.27 39.583l4.355-.437l3.125 2.52l4.167-10.583a12.5 12.5 0 0 1-6.834-3.583z"></svg:path></svg:g>`,
})
export class MarketeqGoldMedalIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
