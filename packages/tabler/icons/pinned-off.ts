import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerPinnedOffIcon],svg[tabler-pinned-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18M15 4.5l-3.249 3.249m-2.57 1.433L7 10l-1.5 1.5l7 7L14 17l.82-2.186m1.43-2.563L19.5 9M9 15l-4.5 4.5M14.5 4L20 9.5"></svg:path>`,
})
export class TablerPinnedOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
