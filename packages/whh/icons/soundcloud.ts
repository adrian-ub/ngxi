import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhSoundcloudIcon],svg[whh-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 576H512V49Q567 0 640 0q80 0 136 56t56 136q0 37-14 71q25-7 46-7q66 0 113 47t47 113t-47 113t-113 47m-416 0h-64V132q35 7 64 29zM256 161q28-22 64-29v444h-64zM128 573V259q16-3 32-3q15 0 32 4v316h-32q-16 0-32-3M64 289v254q-30-22-47-55.5T0 416t17-71.5T64 289"></svg:path>`,
})
export class WhhSoundcloudIcon {
  readonly viewBox = input("0 0 1024 622")
  readonly width = input("1.65em")
  readonly height = input("1em")
}
