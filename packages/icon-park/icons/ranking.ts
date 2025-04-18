import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRankingIcon],svg[icon-park-ranking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M17 18H4V42H17V18Z"></svg:path><svg:path d="M30 6H17V42H30V6Z"></svg:path><svg:path stroke-linecap="round" d="M43 26H30V42H43V26Z"></svg:path></svg:g>`,
})
export class IconParkRankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
