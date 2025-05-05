import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCampingcarIcon],svg[picon-campingcar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h8v2H6l2 2v3H7L6 8L5 7H3L2 8L1 7H0m7-3L5 2v2M2 2H1v1h1"></svg:path>`,
})
export class PiconCampingcarIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
