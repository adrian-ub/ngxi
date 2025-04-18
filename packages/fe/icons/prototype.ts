import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fePrototypeIcon],svg[fe-prototype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 12H6.732a2 2 0 1 1 0-2H9V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2zm2 0v7h8V5h-8v5h2.268a2 2 0 1 1 0 2z"></svg:path>`,
})
export class FePrototypeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
