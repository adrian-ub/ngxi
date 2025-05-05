import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrendFlatCurveIcon],svg[ix-trend-flat-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 64H64v384h384v-42.667H106.667zM128 229.333h298.667v32H128z" clip-rule="evenodd"></svg:path>`,
})
export class IxTrendFlatCurveIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
