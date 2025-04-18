import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFamilyRestroomSharpIcon],svg[material-symbols-light-family-restroom-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T18 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T18 5.808M16.73 21.5V11.046h-1.574l1.479-3.969h2.75l3.115 8.308h-2.654V21.5zm-4.232-10.077q-.546 0-.926-.382t-.38-.928t.383-.925t.927-.38t.926.382t.38.928t-.382.925q-.383.38-.928.38M5.5 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T5.5 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T5.5 5.808M3.73 21.5v-6.577H2.078v-7.5h6.846v7.5H7.269V21.5zm7.54 0V18h-1v-5.5h4.46V18h-1v3.5z"></svg:path>`,
})
export class MaterialSymbolsLightFamilyRestroomSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
