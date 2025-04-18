import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNightSightAutoIcon],svg[material-symbols-light-night-sight-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 20.5q-3.12 0-5.31-2.19T3.5 13q0-2.966 1.979-5.108t4.925-2.354q.029 0 .058.003t.057.003q-.552.742-.785 1.633Q9.5 8.067 9.5 9q0 2.712 1.894 4.606T16 15.5q.564 0 1.109-.101t1.06-.303q-.68 2.431-2.671 3.917Q13.508 20.5 11 20.5m3.512-9.75l2.854-8.5h1.269l2.854 8.5h-.997l-.68-2h-3.623l-.662 2zm1.953-2.85h3.07L18 3.192z"></svg:path>`,
})
export class MaterialSymbolsLightNightSightAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
