import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fa6SolidMagnifyingGlassIcon],svg[fa6-solid-magnifying-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208M208 352a144 144 0 1 0 0-288a144 144 0 1 0 0 288"></svg:path>`,
})
export class Fa6SolidMagnifyingGlassIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
