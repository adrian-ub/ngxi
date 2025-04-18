import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTentBoldIcon],svg[ph-tent-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m255 187.13l-64-144A12 12 0 0 0 180 36H76a12 12 0 0 0-10.85 6.9a2 2 0 0 0-.12.23l-.03.17L1 187.13A12 12 0 0 0 12 204h232a12 12 0 0 0 11-16.87M64 104.55V180H30.46ZM88 180v-75.45L121.54 180Zm59.8 0L94.47 60h77.73l53.34 120Z"></svg:path>`,
})
export class PhTentBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
