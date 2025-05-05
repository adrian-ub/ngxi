import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconGithubIcon],svg[picon-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 8C9 8 9 0 4 0s-5 8-1 8L1 6V5l2 1l.5-1Q1 4 2 2V1l1 .5h2L6 1v1q1 2-1.5 3l1 1"></svg:path>`,
})
export class PiconGithubIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
