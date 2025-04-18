import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBoldCyrlZheIcon],svg[ooui-bold-cyrl-zhe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 10L1 3h4l3 7V3h4v7l3-7h4l-3.5 7l3.5 7h-4l-3-7v7H8v-7l-3 7H1z"></svg:path>`,
})
export class OouiBoldCyrlZheIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
