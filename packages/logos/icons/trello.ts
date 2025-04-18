import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosTrelloIcon],svg[logos-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosTrello0" x1="50%" x2="50%" y1="0%" y2="100%"><svg:stop offset="0%" stop-color="#0091E6"></svg:stop><svg:stop offset="100%" stop-color="#0079BF"></svg:stop></svg:lineargradient></svg:defs><svg:rect width="256" height="256" fill="url(#logosTrello0)" rx="25"></svg:rect><svg:rect width="78.08" height="112" x="144.64" y="33.28" fill="#FFF" rx="12"></svg:rect><svg:rect width="78.08" height="176" x="33.28" y="33.28" fill="#FFF" rx="12"></svg:rect>`,
})
export class LogosTrelloIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
