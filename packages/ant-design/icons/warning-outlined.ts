import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignWarningOutlinedIcon],svg[ant-design-warning-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 720a48 48 0 1 0 96 0a48 48 0 1 0-96 0m16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8m475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48m-783.5-27.9L512 239.9l339.8 588.2z"></svg:path>`,
})
export class AntDesignWarningOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
