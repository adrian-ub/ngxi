import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phAvocadoFillIcon],svg[ph-avocado-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m211 130.66l-29.8-84.19a56 56 0 0 0-106-1.14l-29.51 83.5A88 88 0 1 0 211 130.66M128 200a40 40 0 1 1 40-40a40 40 0 0 1-40 40"></svg:path>`,
})
export class PhAvocadoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
