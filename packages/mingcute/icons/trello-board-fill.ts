import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mingcuteTrelloBoardFillIcon],svg[mingcute-trello-board-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:path d="M0 0h24v24H0z"></svg:path><svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9.5 6h-2a1.5 1.5 0 0 0-1.493 1.356L6 7.5v8a1.5 1.5 0 0 0 1.356 1.493L7.5 17h2a1.5 1.5 0 0 0 1.493-1.356L11 15.5v-8a1.5 1.5 0 0 0-1.356-1.493zm7 0h-2A1.5 1.5 0 0 0 13 7.5v3a1.5 1.5 0 0 0 1.5 1.5h2a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 16.5 6"></svg:path></svg:g>`,
})
export class MingcuteTrelloBoardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
