import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFile1FilledIcon],svg[tdesign-file-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.414 1H3v22h18V6.586zM14.5 7.5V3L19 7.5zM17 14H7v-2h10zm0 4H7v-2h10z"></svg:path>`,
})
export class TdesignFile1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
