import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightColorizeSharpIcon],svg[material-symbols-light-colorize-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-3.366l8.777-8.776l-1.815-1.785l.719-.708l2.323 2.304l3.935-3.953l2.327 2.365l-3.949 3.948l2.324 2.354l-.714.713l-1.823-1.834L7.366 20zm1-1h1.989l8.434-8.484l-1.939-1.939L5 17.012z"></svg:path>`,
})
export class MaterialSymbolsLightColorizeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
