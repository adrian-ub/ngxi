import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitRepositoryPrivateFilledIcon],svg[tdesign-git-repository-private-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a6.5 6.5 0 0 0-6.5 6.5V9H3v14h18V9h-2.5V7.5A6.5 6.5 0 0 0 12 1m4.5 6.5V9h-9V7.5a4.5 4.5 0 0 1 9 0M7 12.504h2.004V15H7zM7 16.5h2.004v2.504H7z"></svg:path>`,
})
export class TdesignGitRepositoryPrivateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
