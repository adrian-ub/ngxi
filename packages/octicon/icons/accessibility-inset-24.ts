import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconAccessibilityInset24Icon],svg[octicon-accessibility-inset-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m2.5 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M12 9h6.375a.75.75 0 0 1 0 1.5h-4.028l.542 4.42l.482 4.5a.75.75 0 1 1-1.492.16l-.41-3.83H10.53l-.41 3.83a.75.75 0 1 1-1.492-.16l.484-4.511l.54-4.409H5.625a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class OcticonAccessibilityInset24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
