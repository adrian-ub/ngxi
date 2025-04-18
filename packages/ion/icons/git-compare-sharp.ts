import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionGitCompareSharpIcon],svg[ion-git-compare-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M209 384h-37a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h37v55.21L294.39 416L209 328.79ZM113 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m319 296.61V156a92.1 92.1 0 0 0-92-92h-35V9.93L217.14 96L305 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0M400 448a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonGitCompareSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
