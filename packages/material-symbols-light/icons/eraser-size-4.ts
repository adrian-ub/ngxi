import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEraserSize4Icon],svg[material-symbols-light-eraser-size-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.054 19q-2.099 0-3.576-1.476Q5 16.05 5 13.954q0-.984.367-1.908t1.108-1.684l3.887-3.886q.74-.74 1.672-1.108T13.95 5q2.099 0 3.574 1.476T19 10.047q0 .984-.367 1.918t-1.108 1.674l-3.886 3.886q-.76.74-1.684 1.108q-.924.367-1.901.367"></svg:path>`,
})
export class MaterialSymbolsLightEraserSize4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
