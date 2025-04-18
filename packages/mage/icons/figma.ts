import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFigmaIcon],svg[mage-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#mageFigma0)"><svg:path fill="currentColor" d="M17.393 8.937A3.87 3.87 0 0 0 15.04 2H8.948a3.88 3.88 0 0 0-2.373 6.937a3.88 3.88 0 0 0 0 6.136a3.87 3.87 0 1 0 6.221 3.068v-2.929a3.8 3.8 0 0 0 2.224.716a3.87 3.87 0 0 0 2.351-6.937zm-6.179 9.204a2.266 2.266 0 1 1-2.266-2.266h2.266zm0-3.87H8.948a2.266 2.266 0 1 1 0-4.532h2.266zm0-6.135H8.948a2.266 2.266 0 0 1 0-4.533h2.266zm3.827 6.136a2.245 2.245 0 0 1-2.223-1.882a1.75 1.75 0 0 1 0-.77a2.267 2.267 0 1 1 2.223 2.652m0-6.136h-2.223V3.603h2.223a2.266 2.266 0 1 1 0 4.533"></svg:path></svg:g><svg:defs><svg:clippath id="mageFigma0"><svg:path fill="#fff" d="M5.079 2h13.843v20H5.079z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
