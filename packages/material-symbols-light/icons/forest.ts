import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightForestIcon],svg[material-symbols-light-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 21v-3.23h2V21zm-6 0v-4H1.885l3.965-6H3.923L9 3.73L14.077 11H12.15l3.971 6H10v4zm9.039-4l-3.462-5.23h1.983l-3.09-4.404L15 3.731L20.077 11H18.15l3.966 6z"></svg:path>`,
})
export class MaterialSymbolsLightForestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
