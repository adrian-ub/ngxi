import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsLitecoinSolidIcon],svg[teenyicons-litecoin-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m3.714 6.584l1.3-5.205l.971.242l-1.093 4.374l1.884-.942l.448.894l-2.652 1.326L3.14 13H13v1H1.86l1.534-6.138l-2.17 1.085l-.448-.894z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsLitecoinSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
