import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLowPriorityIcon],svg[material-symbols-light-low-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.744q0 1.968 1.332 3.339t3.28 1.406h1.134l-1.742-1.762l.708-.708L11.673 17l-2.962 3l-.707-.708L9.758 17.5H8.623q-2.356-.034-3.99-1.708Q3 14.12 3 11.75q0-2.398 1.657-4.074T8.692 6h3v1h-3Q6.74 7 5.37 8.377T4 11.744M14.077 17.5v-1H21v1zm0-5.25v-1H21v1zm0-5.25V6H21v1z"></svg:path>`,
})
export class MaterialSymbolsLightLowPriorityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
