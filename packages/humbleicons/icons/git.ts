import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsGitIcon],svg[humbleicons-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m16 12l-4-4m0 0L9 5m3 3v8m-9.293-4.707l8.586-8.586a1 1 0 0 1 1.414 0l8.586 8.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-8.586-8.586a1 1 0 0 1 0-1.414ZM13 16a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm-4-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"></svg:path>`,
})
export class HumbleiconsGitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
