import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconGithubActionIcon],svg[codicon-github-action-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.04 10h2.58l.65 1H2.54l-.5-.5v-9l.5-.5h12l.5.5v4.77l-1-1.75V2h-11zm5.54 1l-1.41 3.47h2.2L15 8.7L14.27 7h-1.63l.82-1.46L12.63 4H9.76l-.92.59l-2.28 5L7.47 11zm1.18-6h2.87l-1.87 3h3.51l-5.76 5.84L10.2 10H7.47zM6.95 7H4.04V6H7.4zm-.9 2H4.04V8H6.5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconGithubActionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
