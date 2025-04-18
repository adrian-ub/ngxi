import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCampfireFilledIcon],svg[tabler-campfire-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M19.757 16.03a1 1 0 0 1 .597 1.905l-.111.035l-16 4a1 1 0 0 1-.597-1.905l.111-.035z"></svg:path><svg:path d="M3.03 16.757a1 1 0 0 1 1.098-.749l.115.022l16 4a1 1 0 0 1-.37 1.962l-.116-.022l-16-4a1 1 0 0 1-.727-1.213M13.553 2.106C9.379 4.192 7 7.464 7 11a5 5 0 0 0 10 0c0-1.047-.188-1.808-.606-2.705l-.169-.345l-.33-.647C15.274 6.063 15 4.965 15 3a1 1 0 0 0-1.447-.894"></svg:path></svg:g>`,
})
export class TablerCampfireFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
