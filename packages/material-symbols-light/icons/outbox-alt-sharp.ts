import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightOutboxAltSharpIcon],svg[material-symbols-light-outbox-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 16.539L16.577 12L7 7.462v3.215L11 12l-4 1.323zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightOutboxAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
