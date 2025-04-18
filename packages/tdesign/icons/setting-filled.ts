import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSettingFilledIcon],svg[tdesign-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.66 6.423L12 .845L2.34 6.423v11.154L12 23.155l9.66-5.578zM12 16a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class TdesignSettingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
