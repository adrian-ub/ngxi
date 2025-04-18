import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBoldCyrlTeIcon],svg[ooui-bold-cyrl-te-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19H8V4H3V1h14v3h-5z"></svg:path>`,
})
export class OouiBoldCyrlTeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
