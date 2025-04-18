import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsSortReverseAlphabeticallySolidIcon],svg[teenyicons-sort-reverse-alphabetically-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.146.146a.5.5 0 0 1 .708 0l3 3l-.708.708L4 1.707V15H3V1.707L.854 3.854l-.708-.708zM11.5 1A1.5 1.5 0 0 0 10 2.5V4h3V2.5A1.5 1.5 0 0 0 11.5 1M13 5v2h1V2.5a2.5 2.5 0 0 0-5 0V7h1V5zM9 8h3a2 2 0 0 1 1.323 3.5A2 2 0 0 1 12 15H9zm3 3a1 1 0 1 0 0-2h-2v2zm-2 1h2a1 1 0 1 1 0 2h-2z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsSortReverseAlphabeticallySolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
