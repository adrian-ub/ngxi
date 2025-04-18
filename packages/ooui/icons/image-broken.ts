import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiImageBrokenIcon],svg[ooui-image-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.67 9.47L20 12.13v4.09A2 2 0 0 1 17.78 18H2.22A2 2 0 0 1 0 16.22v-5.86L3.33 13l4.45-3.53L12.22 13z"></svg:path><svg:path fill="currentColor" d="M20 9.64L16.67 7l-4.44 3.56L7.78 7l-4.45 3.53L0 7.87V3.78A2 2 0 0 1 2.22 2h15.56A2 2 0 0 1 20 3.78z"></svg:path>`,
})
export class OouiImageBrokenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
