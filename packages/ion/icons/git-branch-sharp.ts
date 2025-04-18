import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionGitBranchSharpIcon],svg[ion-git-branch-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 96a64 64 0 0 0-58.86 89.11l-101.14 88V151.39a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64 0V358l154.25-134.27c1.9.17 3.81.27 5.75.27a64 64 0 0 0 0-128M160 64a32 32 0 1 1-32 32a32 32 0 0 1 32-32m0 384a32 32 0 1 1 32-32a32 32 0 0 1-32 32m192-256a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class IonGitBranchSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
