import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextColumnsThinIcon],svg[ph-text-columns-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M116 64a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4m-4 36H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m32-112h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8m72 32h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8m0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTextColumnsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
