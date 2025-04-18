import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVideoCallSharpIcon],svg[material-symbols-video-call-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3zm-7 4V4h16v6.5l4-4v11l-4-4V20z"></svg:path>`,
})
export class MaterialSymbolsVideoCallSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
