import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightScreenRotationAltSharpIcon],svg[material-symbols-light-screen-rotation-alt-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.6 21.377L5.673 13.5H7.1l6.5 6.5l5.75-5.75h-3.312v-1h5v5h-1v-3.312zM2.962 10.731v-5h1v3.311L10.4 2.604l7.927 7.877H16.9l-6.5-6.5l-5.75 5.75h3.312v1z"></svg:path>`,
})
export class MaterialSymbolsLightScreenRotationAltSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
