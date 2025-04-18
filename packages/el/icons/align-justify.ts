import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elAlignJustifyIcon],svg[el-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 99.202v178.006h1200V99.202zm0 274.53v178.006h1200V373.732zm0 274.53v178.006h1200V648.262zm0 274.53v178.006h1200V922.792z"></svg:path>`,
})
export class ElAlignJustifyIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
