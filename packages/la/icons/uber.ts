import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laUberIcon],svg[la-uber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13s13-5.8 13-13S23.2 3 16 3m0 2c6.1 0 11 4.9 11 11s-4.9 11-11 11A10.96 10.96 0 0 1 5.05 17H13v2h6v-6h-6v2H5.05A10.96 10.96 0 0 1 16 5"></svg:path>`,
})
export class LaUberIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
