import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFlaskIcon],svg[picon-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8V7l2-4V1H1V0h2v3L2 5h4L5 3V0h2v1H6v2l2 4v1"></svg:path>`,
})
export class PiconFlaskIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
