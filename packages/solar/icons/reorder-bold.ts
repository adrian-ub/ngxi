import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarReorderBoldIcon],svg[solar-reorder-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.464 20.536C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535M19 18.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5zm.75-4.75a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75M19 10.75a.75.75 0 0 0 0-1.5H5a.75.75 0 0 0 0 1.5zM19.75 6a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 .75.75" clip-rule="evenodd"></svg:path>`,
})
export class SolarReorderBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
