import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMouseOutlineIcon],svg[material-symbols-light-mouse-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-2.496 0-4.248-1.752T6 15V9.077q0-2.496 1.752-4.248T12 3.077t4.248 1.752T18 9.077V15q0 2.496-1.752 4.248T12 21m.5-11.923H17q0-1.973-1.31-3.387T12.5 4.1zm-5.5 0h4.5V4.1q-1.879.177-3.19 1.59T7 9.078M12 20q2.075 0 3.538-1.463T17 15v-4.923H7V15q0 2.075 1.463 3.538T12 20m0-9.923"></svg:path>`,
})
export class MaterialSymbolsLightMouseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
