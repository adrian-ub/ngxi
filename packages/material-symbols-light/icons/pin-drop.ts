import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPinDropIcon],svg[material-symbols-light-pin-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18.25q-2.967-2.427-4.484-4.771T6 9.016q0-2.645 1.68-4.33Q9.362 3 12 3t4.32 1.686Q18 6.37 18 9.016q0 2.119-1.516 4.453T12 18.25m.004-7.634q.667 0 1.14-.476t.472-1.143t-.476-1.14t-1.143-.472t-1.14.475t-.472 1.144t.475 1.14t1.144.472M6 21v-1h12v1z"></svg:path>`,
})
export class MaterialSymbolsLightPinDropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
