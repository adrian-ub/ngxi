import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightArrowInsertIcon],svg[material-symbols-light-arrow-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.812 17.289L7.712 7.208V16.5h-1v-11h11v1H8.419L18.5 16.6z"></svg:path>`,
})
export class MaterialSymbolsLightArrowInsertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
