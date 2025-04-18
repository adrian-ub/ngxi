import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiAddIcon],svg[ooui-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9V4H9v5H4v2h5v5h2v-5h5V9z"></svg:path>`,
})
export class OouiAddIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
