import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInSimpleThinIcon],svg[ph-arrows-in-simple-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 50.83L153.66 108H192a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4V64a4 4 0 0 1 8 0v38.34l57.17-57.17a4 4 0 1 1 5.66 5.66M112 140H64a4 4 0 0 0 0 8h38.34l-57.17 57.17a4 4 0 0 0 5.66 5.66L108 153.66V192a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4"></svg:path>`,
})
export class PhArrowsInSimpleThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
