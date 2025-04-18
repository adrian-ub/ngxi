import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmDiffIcon],svg[charm-diff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 13.75h8m0-7.5h-8m4-4v8"></svg:path>`,
})
export class CharmDiffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
