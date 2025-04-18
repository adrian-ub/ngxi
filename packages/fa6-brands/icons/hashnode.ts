import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsHashnodeIcon],svg[fa6-brands-hashnode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M35.19 171.1c-46.91 46-46.91 122.9 0 169.8L171.1 476.8c46 46.9 122.9 46.9 169.8 0l135.9-135.9c46.9-46.9 46.9-123.8 0-169.8L340.9 35.19c-46.9-46.91-123.8-46.91-169.8 0zM315.5 315.5c-32.9 32.8-86.1 32.8-118.9 0c-32.9-32.9-32.9-86.1 0-118.9c32.8-32.9 86-32.9 118.9 0c32.8 32.8 32.8 86 0 118.9"></svg:path>`,
})
export class Fa6BrandsHashnodeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
