import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTabletennisIcon],svg[picon-tabletennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 2l1 1l1-1l-1-1m7 2C8-.5 3-.5 3 3s5 3.5 5 0M2 7l1.5-1.5l-1-1L1 6"></svg:path>`,
})
export class PiconTabletennisIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
