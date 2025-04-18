import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsReplaceAudioIcon],svg[material-symbols-replace-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 8q.95-2.725 3.288-4.362T12 2q2.05 0 3.888.875T19 5.35V2h2v6h-6V6h1.9q-.975-.975-2.25-1.487T12 4Q9.975 4 8.262 5.075T5.676 8zm7 14q-1.45 0-2.475-1.025T7 18.5t1.025-2.475T10.5 15q.4 0 .775.075t.725.25V10h5v2h-3v6.5q0 1.45-1.025 2.475T10.5 22"></svg:path>`,
})
export class MaterialSymbolsReplaceAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
