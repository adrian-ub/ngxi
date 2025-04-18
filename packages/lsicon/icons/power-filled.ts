import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPowerFilledIcon],svg[lsicon-power-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 8V2h1v6zM5.273 3.808a5 5 0 1 0 5.454 0l.546-.837a6 6 0 1 1-6.546 0z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconPowerFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
