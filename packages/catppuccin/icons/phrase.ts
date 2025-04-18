import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPhraseIcon],svg[catppuccin-phrase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M3.5 1.5H10c1.385 0 2.5 1.115 2.5 2.5v5c0 1.385-1.115 2.5-2.5 2.5H9"></svg:path><svg:path stroke="#8bd5ca" d="M3.5 1.5v10l4 3v-10z"></svg:path></svg:g>`,
})
export class CatppuccinPhraseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
