import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBoxAddSharpIcon],svg[material-symbols-light-box-add-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V6.916L6.416 4h11.15L20 6.954v4.355q-.206-.059-.437-.085t-.447-.026q-1.191 0-2.251.457q-1.061.457-1.865 1.299V7.808H9v6.788l3-1.5l2.046 1.014q-.392.66-.613 1.414q-.221.755-.221 1.567q0 .778.207 1.518q.208.739.612 1.391zm14.596.596v-3h-3v-1h3v-3h1v3h3v1h-3v3zM5.381 6.808H18.6L17.077 5H6.904z"></svg:path>`,
})
export class MaterialSymbolsLightBoxAddSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
