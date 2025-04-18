import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGitFetchIcon],svg[codicon-git-fetch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 2H8v1h1zm-.854 12l-5-5l.708-.707L8 12.439V11h1v1.44l4.146-4.147l.707.707l-5 5zM8 5h1v1H8z"></svg:path><svg:path d="M9 8H8v1h1z"></svg:path></svg:g>`,
})
export class CodiconGitFetchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
