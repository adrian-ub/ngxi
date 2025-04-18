import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsContactBookIcon],svg[hugeicons-contact-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M4.5 10c0-3.771 0-5.657 1.172-6.828S8.729 2 12.5 2H14c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-1.5c-3.771 0-5.657 0-6.828-1.172S4.5 17.771 4.5 14zm0-4H2m2.5 6H2m2.5 6H2"></svg:path><svg:path d="M15.275 8.493a2 2 0 1 1-4 0a2 2 0 0 1 4 0M9.32 15.716c1.058-1.63 2.739-2.24 3.955-2.239s2.847.61 3.906 2.24a.33.33 0 0 1 .025.344c-.247.439-1.016 1.31-1.57 1.369c-.638.067-2.307.077-2.36.077s-1.773-.01-2.41-.077c-.556-.06-1.324-.93-1.572-1.37c-.061-.109-.043-.238.026-.344"></svg:path></svg:g>`,
})
export class HugeiconsContactBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
