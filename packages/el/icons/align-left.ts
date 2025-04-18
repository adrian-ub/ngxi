import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elAlignLeftIcon],svg[el-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M618.75 99.202v178.006H0V99.202zm328.125 274.53v178.006H0V373.732zM731.25 648.262v178.006H0V648.262zM1200 922.792v178.006H0V922.792z"></svg:path>`,
})
export class ElAlignLeftIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
