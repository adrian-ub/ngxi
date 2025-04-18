import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNewLabelOutlineSharpIcon],svg[material-symbols-light-new-label-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.27 19v-1h2.865l4.615-6l-4.615-6H4v4.616H3V5h12.635L21 12l-5.365 7zm-6.385 1v-3h-3v-1h3v-3h1v3h3v1h-3v3z"></svg:path>`,
})
export class MaterialSymbolsLightNewLabelOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
