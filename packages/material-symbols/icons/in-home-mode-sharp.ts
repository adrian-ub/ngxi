import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsInHomeModeSharpIcon],svg[material-symbols-in-home-mode-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V10H1l11-9l11 9h-3v1h-2V8.475l-6-4.9l-6 4.9V18h2v2Zm10.2 2L10 17.8l1.4-1.4l2.8 2.8l5.9-5.9l1.4 1.4Z"></svg:path>`,
})
export class MaterialSymbolsInHomeModeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
