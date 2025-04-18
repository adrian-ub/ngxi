import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowMenuCloseRoundedIcon],svg[material-symbols-light-arrow-menu-close-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.92 14.9l-2.258-2.334q-.223-.243-.223-.566t.223-.565L9.919 9.1q.192-.212.444-.106t.253.398v5.235q0 .282-.252.383t-.445-.11M13 19.5v-15q0-.213.144-.356T13.501 4t.356.144T14 4.5v15q0 .213-.144.356t-.357.144t-.356-.144T13 19.5"></svg:path>`,
})
export class MaterialSymbolsLightArrowMenuCloseRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
