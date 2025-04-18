import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconTab24Icon],svg[octicon-tab-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4.25a.75.75 0 0 0-1.5 0v15a.75.75 0 0 0 1.5 0zm-9.72 14.28a.75.75 0 1 1-1.06-1.06l4.97-4.97H1.75a.75.75 0 0 1 0-1.5h14.44l-4.97-4.97a.75.75 0 0 1 1.06-1.06l6.25 6.25a.75.75 0 0 1 0 1.06z"></svg:path>`,
})
export class OcticonTab24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
