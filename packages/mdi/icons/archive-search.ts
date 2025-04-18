import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveSearchIcon],svg[mdi-archive-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6H2V2h18zm-8.97 6H8v-1.5c0-.28.22-.5.5-.5h4.54c1.8-1.13 4.03-1.3 5.96-.5V7H3v13h8.82c-2.12-2.2-2.38-5.5-.79-8m12.36 9L22 22.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4zM19 15.5a2.5 2.5 0 0 0-5 0a2.5 2.5 0 0 0 5 0"></svg:path>`,
})
export class MdiArchiveSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
