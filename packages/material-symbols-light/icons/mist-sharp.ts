import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMistSharpIcon],svg[material-symbols-light-mist-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 18.5v-1h11v1zm14 0v-1h3v1zm-14-4v-1h3v1zm6 0v-1h11v1zm-6-4v-1h12v1zm15 0v-1h2v1zm-15-4v-1h6v1zm9 0v-1h8v1z"></svg:path>`,
})
export class MaterialSymbolsLightMistSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
