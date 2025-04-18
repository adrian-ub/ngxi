import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixNamurMaintenanceRequiredIcon],svg[ix-namur-maintenance-required-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M256 1.83L510.17 256L256 510.17L1.83 256zM256 32L32 256l224 224l224-224zm-21.333 160c31.36 0 31.987 20.488 32 21.308v.025h-21.334v21.333h53.334v10.667L384 224l-85.333 64v32h-128l-.001-64.001h-21.333v21.334H160v21.334h-32v-64l95.999-.001v-21.333h-21.332v-.025c.012-.82.64-21.308 32-21.308M384 245.333a118.4 118.4 0 0 1 17.707 35.627c0 9.779-7.928 17.707-17.707 17.707s-17.707-7.928-17.707-17.707A118.4 118.4 0 0 1 384 245.333"></svg:path>`,
})
export class IxNamurMaintenanceRequiredIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
