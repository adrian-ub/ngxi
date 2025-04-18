import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMobileScreensaverSharpIcon],svg[material-symbols-mobile-screensaver-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 23V1h14v5.1h1v4.8h-1V23zm3-8h8l-2.625-3.5L11.5 14l-1.375-1.825zm7-5q.425 0 .713-.288T16 9t-.288-.712T15 8t-.712.288T14 9t.288.713T15 10"></svg:path>`,
})
export class MaterialSymbolsMobileScreensaverSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
