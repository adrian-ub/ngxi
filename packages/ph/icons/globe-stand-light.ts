import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGlobeStandLightIcon],svg[ph-globe-stand-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 182a78 78 0 1 0-78-78a78.09 78.09 0 0 0 78 78m0-144a66 66 0 1 1-66 66a66.08 66.08 0 0 1 66-66m76.33 136.89a6 6 0 0 1-.17 8.48A109.2 109.2 0 0 1 142 213.83V234h26a6 6 0 0 1 0 12h-64a6 6 0 0 1 0-12h26v-20.17a110 110 0 0 1-73.38-186a6 6 0 0 1 8.66 8.32a98 98 0 0 0 138.56 138.57a6 6 0 0 1 8.49.17"></svg:path>`,
})
export class PhGlobeStandLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
