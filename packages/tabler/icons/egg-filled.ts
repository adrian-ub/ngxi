import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEggFilledIcon],svg[tabler-egg-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.002 2C7.829 1.992 4 8.058 4 14.083C4 18.791 7.25 22 12 22c4.727-.206 8-3.328 8-7.917C20 8.063 16.175 2.008 12.002 2"></svg:path>`,
})
export class TablerEggFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
