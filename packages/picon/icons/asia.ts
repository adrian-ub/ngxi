import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAsiaIcon],svg[picon-asia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 4c0-5 8-5 8 0S0 9 0 4m7-2C5 0 0 1 1 4l1 2l1-2l1 2l.5-1Q6 5 6 3l1 1M5 7.5L6 7L4 6"></svg:path>`,
})
export class PiconAsiaIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
