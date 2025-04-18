import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosNpmIcon],svg[logos-npm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#C12127" d="M157.538 164.103h65.641v-32.82h65.642V0H157.538zM223.18 32.82H256v65.64h-32.82zM315.077 0v131.282h65.64V32.821h32.821v98.461h32.821V32.821h32.82v98.461H512V0zM0 131.282h65.641V32.821h32.82v98.461h32.821V0H0z"></svg:path>`,
})
export class LogosNpmIcon {
  readonly viewBox = input("0 0 512 165")
  readonly width = input("3.11em")
  readonly height = input("1em")
}
