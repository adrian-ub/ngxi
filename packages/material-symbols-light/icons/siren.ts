import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSirenIcon],svg[material-symbols-light-siren-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.673 12.942h1v-2.807q0-.952.684-1.63q.683-.678 1.643-.678v-1q-1.38 0-2.354.964q-.973.963-.973 2.344zM4.616 20q-.667 0-1.141-.475T3 18.386v-1.52q0-.666.475-1.14t1.14-.475h1.212v-5.115q0-2.564 1.797-4.35T12 4t4.376 1.786t1.797 4.349v5.115h1.212q.666 0 1.14.475t.475 1.14v1.52q0 .666-.475 1.14t-1.14.475z"></svg:path>`,
})
export class MaterialSymbolsLightSirenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
