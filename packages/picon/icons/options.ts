import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOptionsIcon],svg[picon-options-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 6l1 1l-1 1l-1-1m1-4l1 1l-1 1l-1-1m2-3L4 2L3 1l1-1"></svg:path>`,
})
export class PiconOptionsIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
