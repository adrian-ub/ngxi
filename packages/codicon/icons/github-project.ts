import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGithubProjectIcon],svg[codicon-github-project-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6 13h1V7h6V6H7V3H6v3H3v1h3z"></svg:path><svg:path d="M2.5 2h11l.5.5v11l-.5.5h-11l-.5-.5v-11zM3 13h10V3H3z"></svg:path></svg:g>`,
})
export class CodiconGithubProjectIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
