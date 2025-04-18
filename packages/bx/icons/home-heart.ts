import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxHomeHeartIcon],svg[bx-home-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.223 11.641l-.223.22l-.224-.22a2.224 2.224 0 0 0-3.125 0a2.13 2.13 0 0 0 0 3.07L12 18l3.349-3.289a2.13 2.13 0 0 0 0-3.07a2.225 2.225 0 0 0-3.126 0"></svg:path><svg:path fill="currentColor" d="m21.707 11.293l-9-9a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707M18.001 20H6v-9.585l6-6l6 6V15z"></svg:path>`,
})
export class BxHomeHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
