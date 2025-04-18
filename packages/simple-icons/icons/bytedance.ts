import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsBytedanceIcon],svg[simple-icons-bytedance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.877 1.469L24 2.532v18.942l-4.123 1.056zM6.53 10.897l4.115 1.064v8.978L6.53 22.003zM0 2.572l4.115 1.064v16.736L0 21.428zm17.455 5.62V19.3l-4.122-1.065V9.257z"></svg:path>`,
})
export class SimpleIconsBytedanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
