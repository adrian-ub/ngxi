import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCubeIcon],svg[whh-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1007V559l448-239v448zM0 256L480 0l480 256l-480 256zm448 751L0 768V320l448 239z"></svg:path>`,
})
export class WhhCubeIcon {
  readonly viewBox = input("0 0 960 1007")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
