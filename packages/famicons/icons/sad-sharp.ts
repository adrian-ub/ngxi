import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsSadSharpIcon],svg[famicons-sad-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M328 208a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m-144 0a24 24 0 1 1-24 24a23.94 23.94 0 0 1 24-24m72 80c45.42 0 83.75 29.49 95.72 69.83c1 3.52 2.33 10.17 2.33 10.17H158s1.31-6.69 2.33-10.17C172.11 317.47 210.53 288 256 288"></svg:path>`,
})
export class FamiconsSadSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
