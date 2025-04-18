import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitRepositoryFilledIcon],svg[tdesign-git-repository-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5a4 4 0 0 1 4-4h14v22H7a4 4 0 0 1-4-4zm7.004 0H8v2.004h2.004zm0 3H8v2.004h2.004zM7.5 16a2.5 2.5 0 0 0 0 5H19v-5h-7v3.75l-2-1.345l-2 1.345V16z"></svg:path>`,
})
export class TdesignGitRepositoryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
