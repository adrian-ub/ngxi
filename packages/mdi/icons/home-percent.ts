import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHomePercentIcon],svg[mdi-home-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12v8H5v-8H2l10-9l10 9zm-3.47-.97l-1.06-1.06l-6 6l1.06 1.06zm-4.9-.66c-.23-.24-.55-.37-.88-.37s-.65.13-.88.37c-.24.23-.37.55-.37.88s.13.65.37.88c.23.24.55.37.88.37s.65-.13.88-.37c.24-.23.37-.55.37-.88s-.13-.65-.37-.88m4.5 4.5c-.23-.24-.55-.37-.88-.37s-.65.13-.88.37c-.24.23-.37.55-.37.88s.13.65.37.88c.23.24.55.37.88.37s.65-.13.88-.37c.24-.23.37-.55.37-.88s-.13-.65-.37-.88"></svg:path>`,
})
export class MdiHomePercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
