import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGitPullRequestThinIcon],svg[ph-git-pull-request-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M100 64a28 28 0 1 0-32 27.71v72.58a28 28 0 1 0 8 0V91.71A28 28 0 0 0 100 64m-48 0a20 20 0 1 1 20 20a20 20 0 0 1-20-20m40 128a20 20 0 1 1-20-20a20 20 0 0 1 20 20m112-27.71v-53.66a19.9 19.9 0 0 0-5.86-14.15L153.66 52H192a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0V57.66l44.49 44.48a12 12 0 0 1 3.51 8.49v53.66a28 28 0 1 0 8 0M200 212a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhGitPullRequestThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
