import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStepOverIcon],svg[material-symbols-light-step-over-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 18.5q-1.04 0-1.771-.728t-.731-1.77t.729-1.771t1.769-.731t1.771.729t.731 1.769t-.728 1.771t-1.77.731m-6.812-7q.504-2.379 2.389-3.94T11.975 6q1.864 0 3.394.891q1.531.892 2.458 2.34V5.885h1V11.5h-5.616v-1h4.239q-.723-1.561-2.172-2.53Q13.828 7 12 7Q9.907 7 8.313 8.28T6.216 11.5z"></svg:path>`,
})
export class MaterialSymbolsLightStepOverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
