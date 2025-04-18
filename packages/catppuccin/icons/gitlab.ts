import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinGitlabIcon],svg[catppuccin-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round" d="M8 14.49L14.5 10L12 2l-1.5 4.5h-5L4 2l-2.5 8z"></svg:path>`,
})
export class CatppuccinGitlabIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
