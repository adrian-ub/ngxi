import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHelicopterSharpIcon],svg[material-symbols-light-helicopter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.077 13.462V7.154q-2.885 0-4.596 1.904T3.769 13.46zm2.673 6.769H4v-1h8.75zm1.712-2.385H2.769v-4.384q0-2.927 2.008-5.118q2.007-2.19 5.3-2.19h4.385V10h4.884l.885-2h1v5.98l-6.77.705zM18.75 4.77H4v-1h14.75z"></svg:path>`,
})
export class MaterialSymbolsLightHelicopterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
