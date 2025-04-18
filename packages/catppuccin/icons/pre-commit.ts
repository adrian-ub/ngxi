import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinPreCommitIcon],svg[catppuccin-pre-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9.801" height="9.801" x="-4.901" y="6.413" fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" rx="1.032" ry="1.032" transform="rotate(-45)"></svg:rect><svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M6.569 10.628V5.43h2.619s1.076.157 1.076 1.38c0 1.224-1.076 1.462-1.076 1.462H6.663"></svg:path>`,
})
export class CatppuccinPreCommitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
