import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightUpcomingSharpIcon],svg[material-symbols-light-upcoming-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20v-7h5.23q.328 1.327 1.376 2.164T12 16q1.385 0 2.433-.836q1.048-.837 1.336-2.164H21v7zm14.408-9.315l-.708-.708l2.858-2.858l.707.708zm-10.816 0L3.735 7.826l.707-.708L7.3 9.977zM11.5 8.038v-4h1v4z"></svg:path>`,
})
export class MaterialSymbolsLightUpcomingSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
