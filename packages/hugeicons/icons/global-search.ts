import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGlobalSearchIcon],svg[hugeicons-global-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M20 5.699c-.935.067-2.132.43-2.962 1.504c-1.5 1.94-2.999 2.103-3.999 1.456c-1.5-.97-.239-2.543-1.999-3.397C9.893 4.705 9.733 3.19 10.372 2M2 11c.763.662 1.83 1.268 3.089 1.268c2.6 0 3.12.497 3.12 2.484s0 1.987.52 3.477c.338.97.456 1.938-.218 2.771m11.388-1.071L22 22m-.892-4.954a4.05 4.05 0 0 1-4.054 4.046A4.05 4.05 0 0 1 13 17.046A4.05 4.05 0 0 1 17.054 13a4.05 4.05 0 0 1 4.054 4.046"></svg:path></svg:g>`,
})
export class HugeiconsGlobalSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
