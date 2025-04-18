import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNightlightIcon],svg[material-symbols-nightlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22q-2.05 0-3.875-.788t-3.187-2.15t-2.15-3.187T4 12q0-2.075.788-3.887t2.15-3.175t3.187-2.15T14 2q1.35 0 2.625.35t2.375 1q-2.275 1.325-3.637 3.588T14 12t1.363 5.063T19 20.65q-1.1.65-2.375 1T14 22"></svg:path>`,
})
export class MaterialSymbolsNightlightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
