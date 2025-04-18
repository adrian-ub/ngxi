import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandGitIcon],svg[tabler-brand-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M15 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m-4-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1-1V9m3 2l-2-2m-2-2L9.1 5.1"></svg:path><svg:path d="m13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892 0z"></svg:path></svg:g>`,
})
export class TablerBrandGitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
