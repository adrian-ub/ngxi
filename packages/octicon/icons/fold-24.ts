import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconFold24Icon],svg[octicon-fold-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c.199 0 .389.079.53.22l3.25 3.25a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L12 16.81l-2.72 2.72a.75.75 0 0 1-1.042-.018a.75.75 0 0 1-.018-1.042l3.25-3.25A.75.75 0 0 1 12 15"></svg:path><svg:path fill="currentColor" d="M12.53 8.78a.75.75 0 0 1-1.06 0L8.22 5.53a.75.75 0 0 1 .018-1.042a.75.75 0 0 1 1.042-.018L12 7.19l2.72-2.72a.749.749 0 0 1 1.275.326a.75.75 0 0 1-.215.734ZM12 15.75a.75.75 0 0 1 .75.75v5.75a.75.75 0 0 1-1.5 0V16.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" d="M12 8.5a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75M2.75 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m4 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class OcticonFold24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
