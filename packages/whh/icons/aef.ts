import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAefIcon],svg[whh-aef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M312 683q82-36 301.5-101T928 480q21-9 45-17t37-12l14-3q-41 41-154.5 125.5T647 736.5t-207 161T320 1024q0-43 51.5-115T488 772.5T619 656q-88 28-221.5 57T227 754q-23 14-35 14q5-10 15-21q49-82 49-235q0-9-7-32Q76 594 0 640q0-245 35.5-412T129 0Q64 231 64 522q143-98 268-150t180-52q0 79-60.5 180.5T312 683"></svg:path>`,
})
export class WhhAefIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
