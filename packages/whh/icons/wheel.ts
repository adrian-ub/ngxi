import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhWheelIcon],svg[whh-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M133 450q-5 34-5 62q0 142 91.5 248.5T448 890V698q-84-17-138-68.5T256 512q0-10 2-21q-78-15-125-41m379-322q-108 0-198.5 55.5T173 331q119 53 339 53t339-53q-50-92-140.5-147.5T512 128m254 363q2 11 2 21q0 66-54 118t-138 68v192q137-23 228.5-129.5T896 512q0-28-5-62q-46 26-125 41"></svg:path>`,
})
export class WhhWheelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
