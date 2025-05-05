import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconStrollerIcon],svg[picon-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 3l1-3H2c-6 6 6 8 6 3M3 8L2 7l1-1l1 1m2 1L5 7l1-1l1 1"></svg:path>`,
})
export class PiconStrollerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
