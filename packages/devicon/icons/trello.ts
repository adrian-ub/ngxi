import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconTrelloIcon],svg[devicon-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconTrello0" x1="128" x2="128" y1="0" y2="256" gradientTransform="scale(.5)" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#2684ff"></svg:stop><svg:stop offset="1" stop-color="#0052cc"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconTrello0)" d="M12.5 0h103c6.925 0 12.5 5.575 12.5 12.5v103c0 6.925-5.575 12.5-12.5 12.5h-103C5.575 128 0 122.425 0 115.5v-103C0 5.575 5.575 0 12.5 0"></svg:path><svg:path fill="#fff" d="M78.32 16.64h27.04c3.324 0 6 2.676 6 6v44c0 3.324-2.676 6-6 6H78.32c-3.324 0-6-2.676-6-6v-44c0-3.324 2.676-6 6-6m-55.68 0h27.04c3.324 0 6 2.676 6 6v76c0 3.324-2.676 6-6 6H22.64c-3.324 0-6-2.676-6-6v-76c0-3.324 2.676-6 6-6"></svg:path>`,
})
export class DeviconTrelloIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
