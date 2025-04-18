import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWidgetsIcon],svg[material-symbols-light-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.304 11.962l-4.227-4.227l4.227-4.227l4.227 4.227zM4.615 10.616v-6h6v6zm8.77 8.769v-6h6v6zm-8.77 0v-6h6v6z"></svg:path>`,
})
export class MaterialSymbolsLightWidgetsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
