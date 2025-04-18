import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMedicationLiquidSharpIcon],svg[material-symbols-light-medication-liquid-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.23v-1h10v1zm3.885 11.886h2.23v-2.5h2.5v-2.231h-2.5v-2.5h-2.23v2.5h-2.5v2.23h2.5zM3 20V7h12v13zm15.77-6.077q-.876-.425-1.438-1.326q-.563-.9-.563-2.089q0-1.497.728-2.502Q18.225 7 19.269 7t1.772 1.006t.728 2.494q0 1.196-.562 2.097t-1.438 1.326V20h-1z"></svg:path>`,
})
export class MaterialSymbolsLightMedicationLiquidSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
