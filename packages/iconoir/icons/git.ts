import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGitIcon],svg[iconoir-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.25-3.75a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M12 10v5M8.25 4.75L10.5 7m2.75 2.75l1.5 1.5"></svg:path><svg:path d="M11.576 1.424a.6.6 0 0 1 .848 0l10.152 10.152a.6.6 0 0 1 0 .848L12.424 22.576a.6.6 0 0 1-.848 0L1.424 12.424a.6.6 0 0 1 0-.848z"></svg:path></svg:g>`,
})
export class IconoirGitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
