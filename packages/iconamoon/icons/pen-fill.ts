import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonPenFillIcon],svg[iconamoon-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.621a.5.5 0 0 1 .854-.353l6.01 6.01c.126.126.17.31.15.487a2 2 0 1 0 1.751-1.751a.59.59 0 0 1-.487-.15l-6.01-6.01A.5.5 0 0 1 4.62 2H11a9 9 0 0 1 8.468 12.054l2.24 2.239a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.415 0l-2.239-2.239A9 9 0 0 1 2 11z"></svg:path>`,
})
export class IconamoonPenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
