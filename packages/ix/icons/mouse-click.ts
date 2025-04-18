import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixMouseClickIcon],svg[ix-mouse-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M213.304 128h42.654V42.667h-42.654zM42.688 256h85.308v-42.666H42.688zm101.466-81.674L83.84 113.974l30.156-30.166l60.313 60.352zm-30.159 211.187l-30.156-30.165l60.312-60.352l30.157 30.165zM325.12 174.326l-30.157-30.166l60.313-60.352l30.157 30.166zm3.156 178.041l59.588 59.606l24.142-24.15l-59.609-59.605l42.932-42.923l-150.612-40.682l40.67 150.656zm-62.659 116.97l-75.39-279.21l279.128 75.392l-62.66 62.699l59.61 59.605l-78.441 78.443l-59.588-59.605z"></svg:path>`,
})
export class IxMouseClickIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
