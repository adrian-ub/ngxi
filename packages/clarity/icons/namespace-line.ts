import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNamespaceLineIcon],svg[clarity-namespace-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 4.18a1 1 0 1 0-1 1.73l6 3.47v17.24l-6 3.47a1 1 0 0 0-.37 1.36a1 1 0 0 0 1.37.37l7-4.05V8.23ZM9.68 29.9L4 26.62V9.38L9.68 6.1a1 1 0 1 0-1-1.73L2 8.23v19.54l6.68 3.86a1 1 0 0 0 1.37-.37a1 1 0 0 0-.37-1.36"></svg:path><svg:path fill="currentColor" d="M10 12v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2m7 0v5h-5v-5Zm-5 7h5v5h-5Zm7 5v-5h5v5Zm5-7h-5v-5h5Z"></svg:path>`,
})
export class ClarityNamespaceLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
