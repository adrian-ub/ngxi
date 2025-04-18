import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCameraIcon],svg[gg-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.5v2h8v1H3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h12a3 3 0 0 0 2.99-2.751L24 17.5v-8l-6.01.751A3 3 0 0 0 15 7.5h-1v-2a1 1 0 0 0-1-1zm14 7.766v2.468l4 .5v-3.468zM16 10.5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GgCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
