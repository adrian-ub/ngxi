import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feAlignTopIcon],svg[fe-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.8 3h14.4c.442 0 .8.448.8 1s-.358 1-.8 1H4.8C4.358 5 4 4.552 4 4s.358-1 .8-1M7 9a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0zm6 0a2 2 0 1 1 4 0v6a2 2 0 1 1-4 0z"></svg:path>`,
})
export class FeAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
