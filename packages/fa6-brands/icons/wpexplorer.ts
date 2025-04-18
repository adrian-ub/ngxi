import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6BrandsWpexplorerIcon],svg[fa6-brands-wpexplorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256m-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224s224-100.5 224-224M160.9 124.6l86.9 37.1l-37.1 86.9l-86.9-37.1zm110 169.1l46.6 94h-14.6l-50-100l-48.9 100h-14l51.1-106.9l-22.3-9.4l6-14l68.6 29.1l-6 14.3zm-11.8-116.3l68.6 29.4l-29.4 68.3L230 246zm80.3 42.9l54.6 23.1l-23.4 54.3l-54.3-23.1z"></svg:path>`,
})
export class Fa6BrandsWpexplorerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
