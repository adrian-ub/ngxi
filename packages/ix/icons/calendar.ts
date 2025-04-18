import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixCalendarIcon],svg[ix-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64v384H64V64zm-42.667 128H106.667v213.333h298.666zM192 320v42.667h-42.667V320zm85.333 0v42.667h-42.666V320zm85.334 0v42.667H320V320zM192 234.667v42.666h-42.667v-42.666zm85.333 0v42.666h-42.666v-42.666zm85.334 0v42.666H320v-42.666zm42.666-128H106.667v42.666h298.666z"></svg:path>`,
})
export class IxCalendarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
