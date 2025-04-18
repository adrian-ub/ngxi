import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTrelloIcon],svg[la-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h8v14H7zm10 0h8v9h-8z"></svg:path>`,
})
export class LaTrelloIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
