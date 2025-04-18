import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileScreensaverOutlineSharpIcon],svg[material-symbols-mobile-screensaver-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 23V1h14v5.1h1v4.8h-1V23zm2-2h10V3H7zm1-6h8l-2.625-3.5L11.5 14l-1.375-1.825zm7-5q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10M7 21V3z"></svg:path>`,
})
export class MaterialSymbolsMobileScreensaverOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
