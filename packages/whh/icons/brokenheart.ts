import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhBrokenheartIcon],svg[whh-brokenheart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m805.694 724l-293 300l-294-300q-119-122-168.5-231T.694 256q0-106 75-181t181-75q64 0 119.5 29.5t90.5 80.5l46 274l-128 64l128 384V480l128-64l-90-293q34-57 92-90t126-33q106 0 181 75t75 181q0 127-49.5 236.5T805.695 724z"></svg:path>`,
})
export class WhhBrokenheartIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
