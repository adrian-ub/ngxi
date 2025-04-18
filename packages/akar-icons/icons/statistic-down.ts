import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsStatisticDownIcon],svg[akar-icons-statistic-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-miterlimit="5.759" d="M3 3v16a2 2 0 0 0 2 2h16"></svg:path><svg:path stroke-miterlimit="5.759" d="m7 9l4 4l4-4l6 6"></svg:path><svg:path d="M18 15h3v-3"></svg:path></svg:g>`,
})
export class AkarIconsStatisticDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
