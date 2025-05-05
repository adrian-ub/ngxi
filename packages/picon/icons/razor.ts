import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRazorIcon],svg[picon-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3V1h8v2L3 8L2 7l5-5H4L3 3"></svg:path>`,
})
export class PiconRazorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
