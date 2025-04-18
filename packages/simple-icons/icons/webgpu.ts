import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsWebgpuIcon],svg[simple-icons-webgpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 4.784l8.652 14.432l8.652-14.432zm22.032.145L20.07 8.202H24zm-4.46 0l-4.192 6.993h8.384zm2.498 3.575l1.962 3.273L24 8.504zm-6.69 3.72l4.192 6.992l4.192-6.992z"></svg:path>`,
})
export class SimpleIconsWebgpuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
