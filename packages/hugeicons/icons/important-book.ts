import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImportantBookIcon],svg[hugeicons-important-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.5 10c0-3.771 0-5.657 1.172-6.828S8.729 2 12.5 2H14c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-1.5c-3.771 0-5.657 0-6.828-1.172S4.5 17.771 4.5 14z"></svg:path><svg:path d="M13.25 14.5h.009m0-2.208V9.5M18.25 12a5 5 0 1 1-10 0a5 5 0 0 1 10 0M4.5 6H2m2.5 6H2m2.5 6H2"></svg:path></svg:g>`,
})
export class HugeiconsImportantBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
