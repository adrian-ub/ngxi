import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRobotMowerOutlineIcon],svg[mdi-robot-mower-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 14a5.002 5.002 0 0 0 9 3h5.17A3 3 0 0 0 18 19c1.31 0 2.42-.83 2.83-2H23v-2c0-5.5-4.5-10-10-10H1zm20 1H10.9A5.002 5.002 0 0 0 3 10V7h9.5c2.6 0 4.92 1.16 6.5 3h-4v2h5.25c.42.92.67 1.94.75 3M6 11c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3"></svg:path>`,
})
export class MdiRobotMowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
