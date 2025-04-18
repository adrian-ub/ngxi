import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSlashCircleBoldIcon],svg[solar-slash-circle-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.018-14.635a.75.75 0 1 0-1.448-.389l-2.589 9.66a.75.75 0 0 0 1.45.388z" clip-rule="evenodd"></svg:path>`,
})
export class SolarSlashCircleBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
