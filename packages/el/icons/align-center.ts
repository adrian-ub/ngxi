import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elAlignCenterIcon],svg[el-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M290.625 99.202v178.006h618.75V99.202zm-164.063 274.53v178.006h946.875V373.732zm107.813 274.53v178.006h731.25V648.262zM0 922.792v178.006h1200V922.792z"></svg:path>`,
})
export class ElAlignCenterIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
