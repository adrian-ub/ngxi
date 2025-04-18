import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiBranchIcon],svg[oui-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10.038a3.5 3.5 0 0 1 2.5-1.05h2a2.5 2.5 0 0 0 2.462-2.061a2 2 0 1 1 1.008.017A3.5 3.5 0 0 1 9.5 9.987h-2a2.5 2.5 0 0 0-2.466 2.085A2 2 0 1 1 4 12.063V3.937a2 2 0 1 1 1 0zM4.5 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m8-9a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class OuiBranchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
