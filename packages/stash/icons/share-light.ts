import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashShareLightIcon],svg[stash-share-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 6a2.5 2.5 0 1 0-4.76 1.071l-6.705 3.477a2.5 2.5 0 1 0-.001 2.905l6.555 3.884A2.504 2.504 0 0 0 17.5 20.5a2.5 2.5 0 1 0-1.957-4.056L9.005 12.57l-.063-.032a2.5 2.5 0 0 0 0-1.076l.038-.018l6.75-3.5a.5.5 0 0 0 .109-.076A2.5 2.5 0 0 0 20 6m-2.5-1.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m-11 6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m11 6a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path>`,
})
export class StashShareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
