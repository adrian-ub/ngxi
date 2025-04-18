import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elTorsoIcon],svg[el-torso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1129.688 771.053V1200H70.312V771.053L475 598.685c-99.677-63.991-146.501-176.217-147.368-281.578C328.944 158.681 437.638 1.372 600 0c170.532 5.592 271.439 165.247 272.368 317.105c-3.385 113.922-53.606 222.121-143.421 280.264z"></svg:path>`,
})
export class ElTorsoIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
