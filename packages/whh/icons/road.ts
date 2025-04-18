import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhRoadIcon],svg[whh-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 1024H544q-13 0-22.5-9.5T512 992v-32H384v32q0 13-9.5 22.5T352 1024H32q-13 0-22.5-9.5T0 992L192 32q0-13 9.5-22.5T224 0h128q13 0 22.5 9.5T384 32v32h128V32q0-13 9.5-22.5T544 0h128q13 0 22.5 9.5T704 32l192 960q0 13-9.5 22.5T864 1024M512 192H384v256h128zM384 576v256h128V576z"></svg:path>`,
})
export class WhhRoadIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
