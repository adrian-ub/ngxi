import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPlannerReviewIcon],svg[material-symbols-planner-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22L9 7.95L6.8 18H2v-2h3.2L8.025 3H10l3.05 14.3L15 9h2l1.8 7H22v2h-4.75l-1.2-4.7L14 22z"></svg:path>`,
})
export class MaterialSymbolsPlannerReviewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
