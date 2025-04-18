import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhTriangleIcon],svg[whh-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024h-32v-32q0-13-9.5-22.5T928 960t-22.5 9.5T896 992v32h-64v-96q0-13-9.5-22.5T800 896t-22.5 9.5T768 928v96h-64v-32q0-13-9.5-22.5T672 960t-22.5 9.5T640 992v32h-64v-96q0-13-9.5-22.5T544 896t-22.5 9.5T512 928v96h-64v-32q0-13-9.5-22.5T416 960t-22.5 9.5T384 992v32h-64v-96q0-13-9.5-22.5T288 896t-22.5 9.5T256 928v96h-64v-32q0-13-9.5-22.5T160 960t-22.5 9.5T128 992v32H32q-13 0-22.5-9.5T0 992L992 0q13 0 22.5 9.5T1024 32v960q0 13-9.5 22.5T992 1024M832 480q0-13-9.5-22.5T800 448L448 800q0 13 9.5 22.5T480 832h320q13 0 22.5-9.5T832 800z"></svg:path>`,
})
export class WhhTriangleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
