import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeartOffIcon],svg[tabler-heart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 3l18 18m-1.5-8.428L18 14m-2 2l-4 4l-7.5-7.428a5 5 0 0 1-1.288-5.068A4.98 4.98 0 0 1 5 5m3-1c1.56 0 3.05.727 4 2a5 5 0 1 1 7.5 6.572"></svg:path>`,
})
export class TablerHeartOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
