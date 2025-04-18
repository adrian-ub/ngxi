import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityNamespaceOutlineBadgedIcon],svg[clarity-namespace-outline-badged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.68 29.9L4 26.62V9.38L9.68 6.1a1 1 0 1 0-.93-1.77h-.07L2 8.23v19.54l6.68 3.86a1 1 0 0 0 1.37-.36a1 1 0 0 0-.37-1.37"></svg:path><svg:path fill="currentColor" d="M26 12.34A7.7 7.7 0 0 1 23.66 10H12a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM17 24h-5v-5h5Zm0-7h-5v-5h5Zm7 7h-5v-5h5Zm0-7h-5v-5h5Zm8 9.62l-6 3.47a1 1 0 1 0 1 1.73l7-4.05V12.34a7.7 7.7 0 0 1-2 .88Z"></svg:path><svg:circle cx="30" cy="6" r="5" fill="currentColor"></svg:circle>`,
})
export class ClarityNamespaceOutlineBadgedIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
