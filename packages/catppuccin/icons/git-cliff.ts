import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinGitCliffIcon],svg[catppuccin-git-cliff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M2.143 10.585s3.16-2.431 3.58-2.851s.906-.884 1.702-.133C8.22 8.353 8.86 8.95 8.86 8.95s.707-.154 1.348.265c.64.42 2.983 1.812 2.983 1.812"></svg:path><svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M8.95 8.922s-.973.248-1.26.425s-.862.243-1.083.221m4.29.09s2.14 1.59-3.804 4.683"></svg:path><svg:circle cx="8" cy="8" r="6.5" fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class CatppuccinGitCliffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
