import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRecipeKeeperIcon],svg[arcticons-recipe-keeper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M24 24.468H5.5c0 9.216 11.597 17.14 11.597 17.14H24"></svg:path><svg:path d="M10.884 26.574c0 6.792 7.628 11.804 7.628 11.804M24 24.468h18.5c0 9.216-11.597 17.14-11.597 17.14H24m-9.906-17.14c-1.346-5.039 7.654-8.503 15.73-9.573l.79-1.454l3.184 3.87l-1.747.284c-.855 2.81-5.135 6.873-5.135 6.873"></svg:path><svg:path d="M15.51 24.468c.288-2.594 3.296-5.514 14.772-9.019"></svg:path><svg:path d="M30.578 15.81c-4.34 2.174-9.4 4.672-12.946 8.658m13.793-7.631C26.915 22.963 24 24.468 24 24.468m-2.495 0c2.72-1.59 9.49-8.154 9.49-8.154m2.082.139l8.151-6.605a1.31 1.31 0 0 0 .193-1.845h0a1.31 1.31 0 0 0-1.844-.193l-8.152 6.605"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.825 14.895l2.226 2.7"></svg:path>`,
})
export class ArcticonsRecipeKeeperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
