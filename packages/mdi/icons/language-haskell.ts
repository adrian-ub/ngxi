import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLanguageHaskellIcon],svg[mdi-language-haskell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.08 19l4.67-7l-4.67-7h3.5l4.67 7l-4.67 7zm4.67 0l4.67-7l-4.67-7h3.5l9.34 14h-3.5l-2.92-4.37L10.25 19zm11.28-4.08l-1.53-2.34h5.42v2.34zm-2.33-3.5l-1.56-2.34h7.78v2.34z"></svg:path>`,
})
export class MdiLanguageHaskellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
