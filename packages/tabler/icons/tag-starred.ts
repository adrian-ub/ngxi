import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTagStarredIcon],svg[tabler-tag-starred-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></svg:path><svg:path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592-5.592a2.41 2.41 0 0 0 0-3.408l-7.71-7.71A2 2 0 0 0 11.172 3H6a3 3 0 0 0-3 3"></svg:path><svg:path d="M12.5 13.847L11 15l.532-1.857L10 12h1.902l.598-1.8l.598 1.8H15l-1.532 1.143L14 15z"></svg:path></svg:g>`,
})
export class TablerTagStarredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
