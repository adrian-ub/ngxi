import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAreachartIcon],svg[ix-areachart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 362.667V64L292.437 197.333H142.706l-79.353 79.353l.647 85.981zm-.001 42.666h-384V448h384z" clip-rule="evenodd"></svg:path>`,
})
export class IxAreachartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
