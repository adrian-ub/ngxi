import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconPowerOutlineIcon],svg[lsicon-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M5 3.39a5.5 5.5 0 1 0 6 0M8 2v6"></svg:path>`,
})
export class LsiconPowerOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
