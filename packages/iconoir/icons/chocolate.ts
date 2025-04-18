import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirChocolateIcon],svg[iconoir-chocolate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 6.5c-3 0-4.5-.5-4.5-3.5H5v18h14zm0 8.5H5m0-6h14m-7 12V3"></svg:path>`,
})
export class IconoirChocolateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
