import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLooksIcon],svg[material-symbols-light-looks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17q0-2.064.786-3.89q.785-1.827 2.141-3.183T8.11 7.786T12 7t3.89.786q1.827.785 3.183 2.141t2.142 3.183T22 17h-1q0-3.725-2.637-6.363T12 8t-6.362 2.638T3 17zm4 0q0-2.496 1.752-4.248T12 11t4.248 1.752T18 17h-1q0-2.075-1.463-3.537T12 12t-3.537 1.463T7 17z"></svg:path>`,
})
export class MaterialSymbolsLightLooksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
