import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPlannerReviewIcon],svg[material-symbols-light-planner-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.442 21.5L8.981 5.489L6.396 17.5H2.5v-1h3.085l2.806-13h1.186l3.473 16.07L15.366 9.5h1.25l1.8 7H21.5v1h-3.866l-1.623-6.354L13.635 21.5z"></svg:path>`,
})
export class MaterialSymbolsLightPlannerReviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
