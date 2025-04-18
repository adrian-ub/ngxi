import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciLayersAltIcon],svg[ci-layers-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 23.27l-9-7l1.62-1.26l7.37 5.73l7.38-5.739L21 16.27l-9 7ZM12 19l-9-7l1.62-1.26l7.37 5.73l7.38-5.74L21 12l-9 7Zm0-4.27L4.63 9L3 7.73l9-7l9 7L19.36 9L12 14.73Z"></svg:path>`,
})
export class CiLayersAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
