import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elAlignRightIcon],svg[el-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M581.25 99.202v178.006H1200V99.202zm-328.125 274.53v178.006H1200V373.732zm215.625 274.53v178.006H1200V648.262zM0 922.792v178.006h1200V922.792z"></svg:path>`,
})
export class ElAlignRightIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
