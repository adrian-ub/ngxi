import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPresentationIcon],svg[picon-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6V2Q0 2 0 0h8q0 2-1 2v4M4 6C2 8 6 8 4 6"></svg:path>`,
})
export class PiconPresentationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
