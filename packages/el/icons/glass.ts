import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elGlassIcon],svg[el-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 47.526l503.929 503.906v493.521H318.627v107.521h562.769v-107.521H696.094v-493.52L1200 47.526z"></svg:path>`,
})
export class ElGlassIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
