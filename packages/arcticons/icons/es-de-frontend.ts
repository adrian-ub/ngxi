import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEsDeFrontendIcon],svg[arcticons-es-de-frontend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.828 11a2 2 0 0 0-1.414.586l-3.328 3.328a2 2 0 0 0-.586 1.414V35a2 2 0 0 0 2 2h31.672a2 2 0 0 0 1.414-.586l3.328-3.328a2 2 0 0 0 .586-1.414V13a2 2 0 0 0-2-2z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.411 30.496c.999 1.328 2.25 1.823 3.993 1.823h2.41c2.244 0 4.063-1.858 4.063-4.15v-.018c0-2.293-1.819-4.15-4.062-4.15h-2.66c-2.246 0-4.066-1.861-4.066-4.156c0-2.3 1.824-4.164 4.075-4.164h2.398c1.742 0 2.994.495 3.993 1.823m-23.432 6.495h5.313m2.83 8.319h-8.142V15.68h8.142"></svg:path>`,
})
export class ArcticonsEsDeFrontendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
