import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBoardgamegeekIcon],svg[arcticons-boardgamegeek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.551 33.884l.312-.37l3.146-7.392l-.004-.482l-1.32-1.377l1.096-8.519l-.282-.282l-1.974.592h-.296l2.267-4.94V10.5a3457 3457 0 0 1-16.697 6.151l-.179.134l.926 7.434l-1.555 1.554l4.488 11.205l.323.522l.84-.34z"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsBoardgamegeekIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
