import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrelloIcon],svg[arcticons-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.53 10.31c-1.227 0-2.22.993-2.22 2.218V33.53a2.22 2.22 0 0 0 2.22 2.218h6.845c1.226 0 2.22-.993 2.22-2.218V12.529a2.22 2.22 0 0 0-2.22-2.219zm16.094 0a2.22 2.22 0 0 0-2.22 2.22v11.746a2.22 2.22 0 0 0 2.22 2.221h6.846a2.22 2.22 0 0 0 2.22-2.22V12.53a2.22 2.22 0 0 0-2.22-2.221z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsTrelloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
