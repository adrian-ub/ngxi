import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasBranchDeletedIcon],svg[pajamas-branch-deleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.28 1.22a.75.75 0 1 0-1.06 1.06l1.22 1.22l-1.22 1.22a.75.75 0 0 0 1.06 1.06l1.22-1.22l1.22 1.22a.75.75 0 1 0 1.06-1.06L12.56 3.5l1.22-1.22a.75.75 0 0 0-1.06-1.06L11.5 2.44zm-2.5 6a.75.75 0 0 1 0 1.06l-2.045 2.046A2.499 2.499 0 0 1 4.5 15a2.5 2.5 0 0 1-.75-4.886V5.886a2.501 2.501 0 1 1 1.5 0v2.803l1.47-1.47a.75.75 0 0 1 1.06 0ZM5.5 12.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-9a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path>`,
})
export class PajamasBranchDeletedIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
