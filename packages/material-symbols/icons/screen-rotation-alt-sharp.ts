import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenRotationAltSharpIcon],svg[material-symbols-screen-rotation-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.6 22.8L3.75 13H6.6l7 7l5-5H16v-2h6v6h-2v-2.6zM2 11V5h2v2.6l6.4-6.4l9.85 9.8H17.4l-7-7l-5 5H8v2z"></svg:path>`,
})
export class MaterialSymbolsScreenRotationAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
