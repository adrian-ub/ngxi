import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPenIcon],svg[picon-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8H0V6m7-3L5 1l1-1l2 2M3 7L1 5l3-3l2 2"></svg:path>`,
})
export class PiconPenIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
