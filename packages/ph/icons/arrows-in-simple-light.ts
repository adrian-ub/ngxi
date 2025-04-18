import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsInSimpleLightIcon],svg[ph-arrows-in-simple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 52.24L158.48 106H192a6 6 0 0 1 0 12h-48a6 6 0 0 1-6-6V64a6 6 0 0 1 12 0v33.52l53.76-53.76a6 6 0 0 1 8.48 8.48M112 138H64a6 6 0 0 0 0 12h33.52l-53.76 53.76a6 6 0 1 0 8.48 8.48L106 158.48V192a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhArrowsInSimpleLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
