import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTrelloIcon],svg[ci-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.75 21H5.25A2.253 2.253 0 0 1 3 18.75V5.25A2.253 2.253 0 0 1 5.25 3h13.5A2.253 2.253 0 0 1 21 5.25v13.5A2.253 2.253 0 0 1 18.75 21ZM6.42 5.34a1.08 1.08 0 0 0-1.08 1.08v10.215c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08H6.42Zm7.83 0a1.08 1.08 0 0 0-1.08 1.08v5.715c0 .596.484 1.08 1.08 1.08h3.33a1.08 1.08 0 0 0 1.08-1.08V6.42a1.08 1.08 0 0 0-1.08-1.08h-3.33Z"></svg:path>`,
})
export class CiTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
