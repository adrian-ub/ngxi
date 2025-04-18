import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFoldUp24Icon],svg[octicon-fold-up-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 5.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1-.018 1.042a.75.75 0 0 1-1.042.018L12 6.81L9.28 9.53a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042Z"></svg:path><svg:path fill="currentColor" d="M12 5.5a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8A.75.75 0 0 1 12 5.5M2.75 18a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonFoldUp24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
