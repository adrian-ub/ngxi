import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightExclamationRoundedIcon],svg[material-symbols-light-exclamation-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.077q-.213 0-.357-.144t-.143-.356v-7q0-.212.144-.356t.357-.144t.356.144t.143.356v7q0 .213-.144.356t-.357.144m0 3.846q-.213 0-.356-.144t-.143-.356t.144-.357t.357-.143t.356.144t.143.357t-.144.356t-.357.143"></svg:path>`,
})
export class MaterialSymbolsLightExclamationRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
