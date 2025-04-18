import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[notoV1EggIcon],svg[noto-v1-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f8d8c0" d="M64 3.78c-25.09 0-47.36 32.62-47.36 70.89c0 31.99 21.96 49.56 47.36 49.56s47.36-17.57 47.36-49.56C111.36 36.4 89.09 3.78 64 3.78"></svg:path><svg:path fill="#efb78e" d="M100.33 30.17c.3 18.78-4.39 39.85-16.99 55.16c-18.91 22.99-49.4 20.24-60.93 14.81c8.16 15.71 24.05 24.09 41.59 24.09c25.41 0 47.36-17.57 47.36-49.56c0-16.64-4.21-32.21-11.03-44.5"></svg:path>`,
})
export class NotoV1EggIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
