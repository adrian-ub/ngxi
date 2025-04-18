import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsAUpperCaseIcon],svg[ls-a-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M547 762h-81l-89-242H170L82 762H0L273 0zM273 236l-77 214h155z"></svg:path>`,
})
export class LsAUpperCaseIcon {
  readonly viewBox = input("0 0 547 762")
  readonly width = input("0.72em")
  readonly height = input("1em")
}
