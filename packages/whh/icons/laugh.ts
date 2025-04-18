import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLaughIcon],svg[whh-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m448 0q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m64 384H224q-13 0-22.5 9.5T192 672q40 113 117.5 168.5T511 896t202.5-55.5T832 672q0-13-9.5-22.5T800 640M383 800q25-96 129-96q103 0 127 96q-15 15-38.5 22.5T560 831t-49 1t-49-1t-40.5-8.5T383 800"></svg:path>`,
})
export class WhhLaughIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
