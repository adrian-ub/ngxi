import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faTrelloIcon],svg[fa-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1216V192q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v1024q0 14 9 23t23 9h480q14 0 23-9t9-23m672-384V192q0-14-9-23t-23-9H864q-14 0-23 9t-9 23v640q0 14 9 23t23 9h480q14 0 23-9t9-23m160-768v1408q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V64q0-26 19-45T64 0h1408q26 0 45 19t19 45"></svg:path>`,
})
export class FaTrelloIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
