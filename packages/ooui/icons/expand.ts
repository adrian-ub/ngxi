import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiExpandIcon],svg[ooui-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.5 4.75l-7.5 7.5l-7.5-7.5L1 6.25l9 9l9-9z"></svg:path>`,
})
export class OouiExpandIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
