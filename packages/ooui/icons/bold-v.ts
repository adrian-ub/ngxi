import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBoldVIcon],svg[ooui-bold-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19l6-18h-4l-4 14L6 1H2l6 18z"></svg:path>`,
})
export class OouiBoldVIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
