import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSchedulerIcon],svg[ix-scheduler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 128H106.666v213.333h298.667zM192 320v42.667h-42.667V320zm170.667 0v42.667H320V320zm-85.334-85.333v42.666h-42.666v-42.666zm85.334 0v42.666H320v-42.666zm42.666-128H106.667l-.001 42.666h298.667z"></svg:path>`,
})
export class IxSchedulerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
