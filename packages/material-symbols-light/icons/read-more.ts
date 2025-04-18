import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReadMoreIcon],svg[material-symbols-light-read-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.45 16.739l-.689-.689l3.506-3.55H3v-1h7.267L6.762 7.95l.688-.689L12.189 12zm5.473-.47v-1H21v1zm0-7.538v-1H21v1zm3 3.769v-1H21v1z"></svg:path>`,
})
export class MaterialSymbolsLightReadMoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
