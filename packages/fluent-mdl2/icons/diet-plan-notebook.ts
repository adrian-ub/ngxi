import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DietPlanNotebookIcon],svg[fluent-mdl2-diet-plan-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1668 129h124v1919H256V129h126V0h128v129h258V0h128v129h258V0h128v129h258V0h128zm-4 1791V257H384v1663zM1408 513v128H640V513zM640 1666v-128h768v128zm0-513v-128h768v128z"></svg:path>`,
})
export class FluentMdl2DietPlanNotebookIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
