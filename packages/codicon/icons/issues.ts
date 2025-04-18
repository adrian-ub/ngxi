import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconIssuesIcon],svg[codicon-issues-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.5 1a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13m0 12a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11"></svg:path><svg:circle cx="7.5" cy="7.5" r="1"></svg:circle></svg:g>`,
})
export class CodiconIssuesIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
