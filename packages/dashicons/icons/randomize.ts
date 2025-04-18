import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsRandomizeIcon],svg[dashicons-randomize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6.01L14 9V7h-4l-5 8H2v-2h2l5-8h5V3zM2 5h3l1.15 2.17l-1.12 1.8L4 7H2zm16 9.01L14 17v-2H9l-1.15-2.17l1.12-1.8L10 13h4v-2z"></svg:path>`,
})
export class DashiconsRandomizeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
