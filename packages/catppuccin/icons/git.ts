import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinGitIcon],svg[catppuccin-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M8.5 10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m0-6a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m3 3a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m-4-2v4m-1-6l-1-1m4 4l-1-1"></svg:path><svg:path stroke="#f5a97f" d="m9.06 1.06l5.88 5.88a1.5 1.5 0 0 1 0 2.12l-5.88 5.88a1.5 1.5 0 0 1-2.12 0L1.06 9.06a1.5 1.5 0 0 1 0-2.12l5.88-5.88a1.5 1.5 0 0 1 2.12 0"></svg:path></svg:g>`,
})
export class CatppuccinGitIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
