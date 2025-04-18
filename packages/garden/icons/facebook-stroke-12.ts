import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenFacebookStroke12Icon],svg[garden-facebook-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0m0 1a5 5 0 0 0-.897 9.92V7.63H3.62V6.043h1.484V4.989c0-1.746.847-2.513 2.29-2.513c.693 0 1.058.051 1.231.075v1.384H7.64c-.613 0-.827.584-.827 1.242v.867H8.61l-.244 1.585H6.812v3.305A5.001 5.001 0 0 0 6 1"></svg:path>`,
})
export class GardenFacebookStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
