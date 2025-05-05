import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconNotIcon],svg[picon-not-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l6-6v1L2 7"></svg:path>`,
})
export class PiconNotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
