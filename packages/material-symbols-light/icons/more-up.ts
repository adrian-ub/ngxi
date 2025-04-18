import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMoreUpIcon],svg[material-symbols-light-more-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 15.539V6.5H9v-1h9.5v10.039zm-5 5V11.5H4v-1h9.5v10.039z"></svg:path>`,
})
export class MaterialSymbolsLightMoreUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
