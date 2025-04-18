import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSpeedIcon],svg[whh-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M421.5 602.5Q384 565 384 512t38-91L966 59L603 603q-37 37-90.5 37t-91-37.5M512 62q-91 0-174.5 36T194 194T98.5 337T63 511q0 106 48 202l-56 28Q0 632 0 512q0-105 40.5-199.5t109-163T313 40.5T512 0q161 0 293 92l-57 38Q639 62 512 62m421 158q91 132 91 292q0 120-55 229l-56-29q48-95 48-201q0-125-66-234z"></svg:path>`,
})
export class WhhSpeedIcon {
  readonly viewBox = input("0 0 1024 741")
  readonly width = input("1.39em")
  readonly height = input("1em")
}
