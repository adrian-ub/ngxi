import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMobileHandSharpIcon],svg[material-symbols-light-mobile-hand-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h11.077v2.135h-2.616v7.602l-3.438-1.7l-3.357 3.492L11.785 21zm10.777 0q-.43 0-.814-.159q-.384-.158-.66-.508l-4.476-5.64l.712-.75l5.307 2.615V7.519h.923l3 3V18q0 1.25-.875 2.125T16.77 21zM10.539 7.308q.309 0 .539-.23t.23-.54t-.23-.539q-.23-.23-.54-.23T10 6t-.23.54q0 .309.23.539t.54.23"></svg:path>`,
})
export class MaterialSymbolsLightMobileHandSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
