import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitRepositoryPrivateIcon],svg[tdesign-git-repository-private-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 7.5a6.5 6.5 0 0 1 13 0V9H21v14H3V9h2.5zm2 1.5h9V7.5a4.5 4.5 0 1 0-9 0zM5 11v10h14V11zm2 1.504h2.004V15H7zM7 16.5h2.004v2.504H7z"></svg:path>`,
})
export class TdesignGitRepositoryPrivateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
