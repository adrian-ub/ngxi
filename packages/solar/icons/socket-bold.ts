import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSocketBoldIcon],svg[solar-socket-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.75 12a5.25 5.25 0 0 1 4.5-5.197V7.5a.75.75 0 0 0 1.5 0v-.697a5.251 5.251 0 0 1 0 10.394V16.5a.75.75 0 0 0-1.5 0v.697A5.25 5.25 0 0 1 6.75 12M15 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M12 5.25a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5"></svg:path></svg:g>`,
})
export class SolarSocketBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
