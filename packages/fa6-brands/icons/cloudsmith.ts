import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsCloudsmithIcon],svg[fa6-brands-cloudsmith-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 227.6v56.9L284.4 512h-56.8L0 284.4v-56.8L227.6 0h56.9zm-256 162a133.6 133.6 0 1 0 0-267.1a133.6 133.6 0 1 0 0 267.1"></svg:path>`,
})
export class Fa6BrandsCloudsmithIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
