import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitRepositoryIcon],svg[tdesign-git-repository-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A4.5 4.5 0 0 1 7.5 1H21v22H7.5A4.5 4.5 0 0 1 3 18.5zm2 9.258A4.5 4.5 0 0 1 7.5 14H19V3H7.5A2.5 2.5 0 0 0 5 5.5zM8 16h-.5a2.5 2.5 0 0 0 0 5H19v-5h-5v4.618l-3-1.5l-3 1.5zm4 0h-2v1.382l1-.5l1 .5zM8 5h2.004v2.004H8zm0 3h2.004v2.004H8z"></svg:path>`,
})
export class TdesignGitRepositoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
