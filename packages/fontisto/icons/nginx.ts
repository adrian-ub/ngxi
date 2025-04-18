import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoNginxIcon],svg[fontisto-nginx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.395 0L0 6v12l10.395 6l10.4-6V6zm6 16.59a1.407 1.407 0 0 1-1.535 1.29h.006h-.026a2.34 2.34 0 0 1-1.771-.807l-.002-.003l-6-7.141v6.674c0 .703-.568 1.273-1.271 1.276h-.08a1.3 1.3 0 0 1-1.29-1.289V7.41a1.387 1.387 0 0 1 1.505-1.29h-.005h.039c.712 0 1.352.312 1.789.808l.002.003l5.97 7.141V7.411a1.3 1.3 0 0 1 1.289-1.29h.076a1.3 1.3 0 0 1 1.29 1.289v9.181z"></svg:path>`,
})
export class FontistoNginxIcon {
  readonly viewBox = input("0 0 21 24")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
