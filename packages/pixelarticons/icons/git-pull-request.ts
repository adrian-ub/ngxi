import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsGitPullRequestIcon],svg[pixelarticons-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h8v8H7v12H5V10H2zm2 2v4h4V4zm8 1h7.09v9H22v8h-8v-8h3.09V7H12zm4 11v4h4v-4z"></svg:path>`,
})
export class PixelarticonsGitPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
