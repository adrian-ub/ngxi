import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHMobiledataRoundedIcon],svg[material-symbols-light-h-mobiledata-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 12.5v4q0 .213-.144.356T7.999 17t-.356-.144T7.5 16.5v-9q0-.213.144-.356T8.001 7t.356.144t.143.356v4h7v-4q0-.213.144-.356T16.001 7t.356.144t.143.356v9q0 .213-.144.356t-.357.144t-.356-.144t-.143-.356v-4z"></svg:path>`,
})
export class MaterialSymbolsLightHMobiledataRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
