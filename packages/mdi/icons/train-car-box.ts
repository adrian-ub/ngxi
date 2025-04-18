import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTrainCarBoxIcon],svg[mdi-train-car-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7v10h1a2 2 0 1 0 4 0h12a2 2 0 1 0 4 0h1V7z"></svg:path>`,
})
export class MdiTrainCarBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
