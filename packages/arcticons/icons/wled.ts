import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWledIcon],svg[arcticons-wled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.583 33.75H17.5v5.417a1.083 1.083 0 0 1-1.083 1.083H5.583A1.083 1.083 0 0 1 4.5 39.167v-4.334a1.083 1.083 0 0 1 1.083-1.083M24 20.75v11.917a1.083 1.083 0 0 1-1.083 1.083H17.5h0V21.833a1.083 1.083 0 0 1 1.083-1.083zm18.417-6.5H30.5h0V8.833a1.083 1.083 0 0 1 1.083-1.083h10.834A1.083 1.083 0 0 1 43.5 8.833v4.334a1.083 1.083 0 0 1-1.083 1.083M24 27.25V15.333a1.083 1.083 0 0 1 1.083-1.083H30.5v11.917a1.083 1.083 0 0 1-1.083 1.083z"></svg:path>`,
})
export class ArcticonsWledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
